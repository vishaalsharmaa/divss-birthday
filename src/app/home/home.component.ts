import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

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

  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.birthdayCountDown();
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
        console.log("yeh wali date nikal gayi...")
        this.dayNotArrived = false;
        clearInterval(this.intervalX);
      }
      else if(this.distance == 0) {
        this.dayNotArrived = false;
        this.surprise();
      }
    }, 1000);
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
