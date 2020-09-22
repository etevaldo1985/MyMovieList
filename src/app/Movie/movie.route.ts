import { SinglePeopleComponent } from './people/single-people/single-people.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieAppComponent } from './movie.app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




const movieRoutingConfig: Routes = [
{path: '', component: MovieAppComponent,
children: [
  {path: 'single-movie/:id', component: SingleMovieComponent},
  {path: 'single-people/:id', component: SinglePeopleComponent}
]}
];







@NgModule({
  imports: [RouterModule.forChild(movieRoutingConfig)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
