import { ElementRef, Output, EventEmitter} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.addEventListener('click', ()=> {
      this.close();
    })
  }

  public close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
    this.closeModal.emit('close');
  }

}
