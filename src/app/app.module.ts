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
import {MatCardModule} from '@angular/material/card';


import { LazyLoadImageModule , LAZYLOAD_IMAGE_HOOKS, ScrollHooks} from 'ng-lazyload-image'; // <-- import it


import {AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

import {AngularFireStorage} from '@angular/fire/storage'
import { environment } from 'src/environments/environment';



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
    MatCardModule,
    MatSnackBarModule,
    LazyLoadImageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], 
