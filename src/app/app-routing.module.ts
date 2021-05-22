import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { BirthdayCardComponent } from './birthday-card/birthday-card.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WishesComponent } from './wishes/wishes.component';


const routes: Routes = 
[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'birthday-card', component: BirthdayCardComponent },
  // { path: 'wishes', component: WishesComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
