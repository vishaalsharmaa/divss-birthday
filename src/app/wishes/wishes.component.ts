import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateService } from '../services/date-service.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.scss']
})
export class WishesComponent implements OnInit {

  constructor(private dataService: DateService , private matSnackBar: MatSnackBar) { }

  public imageBannerURL= 'https://raw.githubusercontent.com/vishaalsharmaa/divss-birthday/master/src/assets/images/birthday.svg';
  public wishesByFriends:any = [];

  public defaultImage = 'assets/images/image_loader.gif';

  ngOnInit(): void {

    this.birthdayWishesToDisplay();
  }

  public birthdayWishesToDisplay()
  {
    this.dataService.getBirthdayWishes().subscribe((response:any)=> {
      var res = response.wishes;
      if(res.length)
      {
        this.wishesByFriends = res;
      }
      else
      {
        console.error("An error occuired.");
      }
    },
    (error:Error)=>{
      this.matSnackBar.open('Something went wrong with genericMessageToDisplay(). Inform Vishal ASAP.', '', {
        duration: 2500
      });
    });
  }

}
