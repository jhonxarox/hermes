import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: object = [];
  private dataSource = new BehaviorSubject(this.data);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: object) {
    // this.dataSource = new BehaviorSubject(data);
    this.dataSource.next(data);
  }
}
