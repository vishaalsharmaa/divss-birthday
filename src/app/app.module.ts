import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { BirthdayCardComponent } from './birthday-card/birthday-card.component';
import { WishesComponent } from './wishes/wishes.component';

import { HttpClientModule } from '@angular/common/http';
// service
import { DateService } from './services/date-service.service';
// Angular Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LazyLoadImageModule , LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image'; // <-- import it


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    FooterComponent,
    NavbarComponent,
    GalleryComponent,
    ModalComponent,
    BirthdayCardComponent,
    WishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    HttpClientModule,
    MatSnackBarModule,
    LazyLoadImageModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], 
