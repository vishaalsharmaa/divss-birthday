import { Component, OnInit } from '@angular/core';
import { DateService } from '../services/date-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService: DateService) { }

  public hideNavbar: boolean = true;

  ngOnInit(): void {
    this.hideNavbar = !this.dataService.hasDayArrived();
  }

}
