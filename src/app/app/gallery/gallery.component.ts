import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: Array<{
    src: string;
  }>;

  public modalImage: {
    src: string;
  }

  public isShowModal: boolean;

  constructor() {
    this.images = [];
    this.modalImage = {src: ''};
    this.isShowModal = false;
  }

  ngOnInit(): void {
    this.images = [
      {
        src: '../assets/images/1.jpg'
      },
      {
        src: '../assets/images/2.jpg'
      },
      {
        src: '../assets/images/3.jpg'
      },
      {
        src: '../assets/images/4.jpg'
      },
      {
        src: '../assets/images/5.jpg'
      },
      {
        src: '../assets/images/6.jpg'
      },
      {
        src: '../assets/images/7.jpg'
      },
      {
        src: '../assets/images/1.jpg'
      },
      {
        src: '../assets/images/2.jpg'
      },
      {
        src: '../assets/images/3.jpg'
      },
      {
        src: '../assets/images/4.jpg'
      },
      {
        src: '../assets/images/5.jpg'
      }
    ]
  }

  showDialog(image: {src: string}){
    this.isShowModal = true;
    this.modalImage.src = image.src;
  }
  closeDialog() {
    this.isShowModal = false;
  }

}
