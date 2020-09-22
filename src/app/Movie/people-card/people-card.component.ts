import { Credits } from './../../models/movie-models/credits';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html'
})
export class PeopleCardComponent implements OnInit {

  poster = 'https://image.tmdb.org/t/p/w500/';

  @Input()
  people: Credits;

  constructor() { }

  ngOnInit(): void {
  }

}
