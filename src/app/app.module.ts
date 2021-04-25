import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BirthdayCardComponent } from './birthday-card/birthday-card.component';
import { WishesComponent } from './wishes/wishes.component';

import { HttpClientModule } from '@angular/common/http';
import { DateService } from './services/date-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    NavbarComponent,
    BirthdayCardComponent,
    WishesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
