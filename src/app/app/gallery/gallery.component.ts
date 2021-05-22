import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: Array<{
    src: string;
    text: string;
  }>;

  public modalImage: {
    src: string;
    text: string;
  }

  public isShowModal: boolean;

  constructor() {
    this.images = [];
    this.modalImage = {src: '', text: ''};
    this.isShowModal = false;
  }

  ngOnInit(): void {
    this.images = [
      {
        src: '../assets/images/1.jpg',
        text: 'Test text Image 1'
      },
      {
        src: '../assets/images/2.jpg',
        text: 'Test text Image 2'
      },
      {
        src: '../assets/images/3.jpg',
        text: 'Test text Image 3'
      },
      {
        src: '../assets/images/4.jpg',
        text: 'Test text Image 4'
      },
      {
        src: '../assets/images/5.jpg',
        text: 'Test text Image 5'
      },
      {
        src: '../assets/images/6.jpg',
        text: 'Test text Image 6'
      },
      {
        src: '../assets/images/7.jpg',
        text: 'Test text Image 7'
      },
      {
        src: '../assets/images/1.jpg',
        text: 'Test text Image 8'
      },
      {
        src: '../assets/images/2.jpg',
        text: 'Test text Image 9'
      },
      {
        src: '../assets/images/3.jpg',
        text: 'Test text Image 10'
      },
      {
        src: '../assets/images/4.jpg',
        text: 'Test text Image 11'
      },
      {
        src: '../assets/images/5.jpg',
        text: 'Test text Image 12'
      }
    ]
  }

  showDialog(image: {src: string, text: string}){
    this.isShowModal = true;
    this.modalImage.src = image.src;
    this.modalImage.text = image.text;
  }
  closeDialog() {
    this.isShowModal = false;
  }

}
