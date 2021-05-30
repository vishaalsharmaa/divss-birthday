import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateService } from '../services/date-service.service';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: Array<{
    imagePath: string;
    imageText: string;
  }>;

  public polaroidsOffice: any = [];
  public polaroidsTrips: any = [];
  public polaroidsFunDays: any = [];

  public modalImage: {
    src: string;
    text: string;
  }

  public isShowModal: boolean;

  public defaultImage = '../assets/images/image_loader.gif';

  constructor(private dataService: DateService , private matSnackBar: MatSnackBar, private afStorage: AngularFireStorage)
  {
    this.images = [];
    this.modalImage = {src: '', text: ''};
    this.isShowModal = false;
  }

  ngOnInit(): void {
    this.getGallaryContentToDisplay();
  }

  getGallaryContentToDisplay()
  {
    this.dataService.getGallary().subscribe((response:any)=> {
      var res = response.polaroid;
      if(res.length)
      {
        this.images = res;
        this.polaroidsOffice = response.polaroidsOffice;
        this.polaroidsTrips = response.polaroidsTrips;
        this.polaroidsFunDays = response.polaroidsFunDays;
      }
      else
      {
        console.error("An error occuired.");
      }
    },
    (error:Error)=> {
      this.matSnackBar.open('Something went wrong with getGallaryContentToDisplay(). Inform Vishal ASAP.', '', {
        duration: 2500
      });
    });
  }

  showDialog(image: {imagePath: string, imageText: string}){
    this.isShowModal = true;
    this.modalImage.src = image.imagePath;
    this.modalImage.text = image.imageText;
  }

  closeDialog() {
    this.isShowModal = false;
  }

}
