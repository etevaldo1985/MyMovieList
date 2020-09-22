import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieModule } from './Movie/movie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HomeComponent } from './navigation/home/home.component';
import { HttpClientModule } from '@angular/common/http';


import { NavService } from './navigation/navigation.service';
import { TvCardComponent } from './Tv/tv-card/tv-card.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    TvCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MovieModule,
    NgbModule,
    NgxYoutubePlayerModule.forRoot()

  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
