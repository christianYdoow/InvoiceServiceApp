import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemList } from '../models/ItemList';
import { LIST } from '../mock-data/sampleItemData';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  list=LIST;

  constructor() { }

  getList():Observable<ItemList[]>{
    return of(this.list);
  }
}
