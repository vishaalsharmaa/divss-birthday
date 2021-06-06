import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { DateService } from '../services/date-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// import * as Speech from 'speak-tts';
import Speech from 'speak-tts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public birthdayBanner: string = 'assets/images/birthday_banner.png';
  public rachelFooterImage:string = 'assets/images/bottom-banner.png';
  public joeyFooterImage:string = 'assets/images/jandler.png';
  
  // public countDownDate = new Date('Jul 7, 2021 12:00:00').getTime();
  // public countDownDate = new Date('Apr 18, 2021 21:10:00').getTime();

  public countDownDate = new Date('Jul 7, 2021').getTime();

  public hideView = true;  
  public distance: any;
  public intervalX: any;
  public leftDays: any = 0;
  public leftHours: any = 0;
  public leftMins: any = 0;
  public leftSeconds: any = 0;
  public todayIsTheDay: boolean = false;
  public dayNotArrived:boolean = true;
  public hideNavbar: boolean = true;

  public displayMessage:any = [];
  public dailyGenerricMessage:any;


  public birthdayConfig: any = {
    birthDayBannerText:"Happy Birthday Divsss",
    birthDate:"07-06-2021",
    birthDayPersonName:"Divya Rawat",
    birthDayPersonNickName:"Divsss",
    birthDaywish1:"Your 23rd birthday doesn’t add a bit of specialty to you, because you’re special on a daily basis.",
    birthDaywish2:"Happy Birthday to the person who brought my life much joy. It’s always boring without you around.",
    birthDayPersonImagePath:"assets/images/birthday_girl.png"
  };

  // speech
  public speech: any;
  public speechData: any;

  @ViewChild('fireWorkContainer' , {static: true}) fireWorkContainer: any;
  @ViewChild('myButton')
  myButton!: ElementRef;

 
  constructor(private renderer2: Renderer2, private elementRef: ElementRef, private dataService: DateService, private matSnackBar: MatSnackBar) {
    this.speech = new Speech();

    if(this.speech.hasBrowserSupport()) // returns a boolean
    { 
        console.log("Has synthesis supported: " , this.speech.hasBrowserSupport());

        this.speech.init({
            volume  : 1,
            lang    : 'en-US',
            rate    : 1,
            pitch   : 1,
            voice   :'Google US English',
            splitSentences: true,
            listeners: {
              onvoiceschanged: (voices:any) => {
            }
          }
        }).then((data:any) => {
            
          // console.log("Speech is ready, voices are available", data);
          this.speechData = data;
          data.voices.forEach( (voice:any) => {
          });

        }).catch( (e:any) => {
            console.error("An error occured while initializing : ", e)
        });
    }
  }


  ngOnInit(): void {

    this.hideView = !this.dataService.hasDayArrived();
    this.birthdayCountDown();
    this.runService();
    this.genericMessageToDisplay();
  }

  ngAfterViewInit() {
    this.buttonAutoClick();
  }


  public runService()
  {
    this.dataService.getFinalCountDownMessages().subscribe((response:any)=>
    {
      if(response.messages)
      {
        var res = response.messages
        this.showEachDayMessage(res);
      }
      else
      {
        this.matSnackBar.open('Error fetching data.', '', {
          duration: 2500
        });
      }
    },
    (error:Error)=>
    {
      this.matSnackBar.open('Something went wrong! Inform Vishal ASAP.', '', {
        duration: 2500
      });
      console.error(error);
    });
  }

  public birthdayCountDown() {
    
    this.intervalX = setInterval(() => {
      var today = new Date().getTime();
      this.distance = this.countDownDate - today;

      var days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor(
        (this.distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);

      this.leftDays = days;
      this.leftHours = hours;
      this.leftMins = minutes;
      this.leftSeconds = seconds;

      if (this.distance < 0) {
        console.log("yeh wali date nikal gayi...");
        this.dayNotArrived = false;
        clearInterval(this.intervalX);
      }
      else if(this.distance == 0) {
        this.dayNotArrived = false;
        this.surprise();
      }
    }, 1000);
  }


  public genericMessageToDisplay()
  {
    this.dataService.getGenericMessage().subscribe((response:any)=> {
      
      if(response.status == "SUCCESS") {
        var res = response.dailybugle;
        this.dailyGenerricMessage = res;
      }
      else {
        console.error("An error occuired.");
      }
    },
    (error:Error)=>{
      this.matSnackBar.open('Something went wrong with genericMessageToDisplay(). Inform Vishal ASAP.', '', {
        duration: 2500
      });
    });
  }


  public showEachDayMessage(arrayParam:any)
  {
    var today = new Date;
    today.setHours(0,0,0,0);

    // Date Format accepted here is: MM-DD-YYYY |  E.g. var count_date = "07-06-2021";
    arrayParam.forEach( (item:any , index:any) => 
    {
      var messageDisplayDate = new Date(arrayParam[index].showDate);
      
      if(today.toISOString() == messageDisplayDate.toISOString())
      {
        var context = {
          message : item.message,
          show    : true,
          showDate: messageDisplayDate,
          messageBy: item.messageBy
        };
        this.displayMessage.push(context);
      }
    });
  }

  public surprise()  
  {
    const canvas = this.renderer2.createElement('canvas');
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
    const myConfetti = confetti.create(canvas,  
    {
      resize: false,
    });
    myConfetti();
  }

 

  public buttonAutoClick() {
    let el: HTMLElement = this.myButton.nativeElement as HTMLElement;
    el.click();
  }

  public speakingBot() {
    setTimeout(()=>this.start(this.leftDays) , 1200);
  }


  start(left:number)
  {

    var finalSentence = `${left} days left for your birthday.`;

    this.speech.speak(
    {
      text: finalSentence,  
    }).then(() => {
        console.log("Success !")
    }).catch( (e:any) => {
        console.error("An error occurred :", e) 
    })
  }

  pause() {
    this.speech.pause();
  }

  resume() {
    this.speech.resume();
  }


}
