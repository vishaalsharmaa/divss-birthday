import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrls: ['./birthday-card.component.scss']
})
export class BirthdayCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      var envelope = $('#envelope');
      var btn_open = $("#open");
      var btn_reset = $('#reset');
      var message = $('#secretMessage');

      envelope.on("click" , function(){
        open();
      });

      btn_open.on("click" , function(){
        open();
      });

      message.on("click" , function(){
        navigateToMessage();
      });

      btn_reset.on("click" , function(){
        close();
      });

      
    
      // envelope.click(function() {
      //     open();
      // });

      // btn_open.click(function() {
      //   open();
      // });

      // btn_reset.click(function() {
      //     close();
      // });
      
      function open()
      {
          envelope.addClass('open')
              .removeClass('close');
      }
      function close() {
          envelope.addClass('close')
              .removeClass('open');
      }

      function navigateToMessage(){
        console.log("button clicked");
      }
  });

    

  } // OnInit ends

  public heartClick()
  {
    var OTHER_APP_URL = 'https://vishaalsharmaa.github.io/hbd-divsss/';
    window.open(OTHER_APP_URL, "_blank");
  }

}

