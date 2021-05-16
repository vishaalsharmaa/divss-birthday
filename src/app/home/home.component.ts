import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as confetti from 'canvas-confetti';
import { DateService } from '../services/date-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // public countDownDate = new Date('Jul 7, 2021 12:00:00').getTime();
  public countDownDate = new Date('Jul 7, 2021').getTime();
  // public countDownDate = new Date('Apr 18, 2021 21:10:00').getTime();
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

 
  constructor(private renderer2: Renderer2, private elementRef: ElementRef, private dataService: DateService, private matSnackBar: MatSnackBar) {}

  
  @ViewChild('fireWorkContainer' , {static: true}) fireWorkContainer: any;

  ngOnInit(): void {
    this.birthdayCountDown();
    this.runService();
  }


  public runService()
  {
    this.dataService.getFinalCountDownMessages().subscribe(
    (response:any)=>
    {
      if(response.messages)
      {
        var res = response.messages
        this.showEachDayMessage(res);
      }
      else
      {
        this.matSnackBar.open('No data', '', {
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


  public showEachDayMessage(arrayParam:any)
  {
    var today = new Date;
    today.setHours(0,0,0,0);

    // Format accepted here isL: MM-DD-YYYY |  E.g. var count_date = "07-06-2021";
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


}
