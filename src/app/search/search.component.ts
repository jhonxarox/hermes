import { Component, OnInit, OnChanges } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  searchText: any;
  movies: object = [];

  constructor(private dataSevice: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.dataSevice.currentData.subscribe(data => this.movies = data);
    console.log(this.searchText);
  }

}
