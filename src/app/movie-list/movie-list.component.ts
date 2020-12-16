import { Component, OnInit, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {

  movies: object = [];
  dataLength;

  constructor(
    private apiService: ApiService,
    private datePipe: DatePipe,
    private dataSevice: DataService,
    private router: Router) { }

  async ngOnInit() {
    let status = await this.getMovieList();
  }

  ngOnChanges(){
    this.dataSevice.currentData.subscribe(data => this.movies = data);
  }

  movieDetail(movie: object) {
    // this.router.navigate()
  }

  getMovieList() {
    return new Promise(async (resolve) => {
      this.apiService.getMovieList().subscribe((data: object[]) => {
        console.log(data);
        this.movies = data;
        this.dataLength = Object.keys(this.movies).length;
      });
      return resolve(true);
    });
  }

}
