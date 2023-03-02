import { Component,OnInit } from '@angular/core';
import { LIST } from '../mock-data/sampleItemData';
import { ItemList } from '../models/ItemList';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

 lists?:ItemList[];


  constructor(private listService : ListService){}

  ngOnInit():void{
    this.getLists();
  }

  getLists():void{
    this.listService.getList().subscribe(lists=>this.lists=lists)
  }

  calculateTotalPrice(list:any):number{
    return list.quantity*list.unitPrice;
  }

  calculateSubtotal():number{
    let subtotal=0;
    for(let list of this.lists?.filter(list=>list)??[]){
      subtotal += this.calculateTotalPrice(list);
    }
    return subtotal;
  }

  calculateTotalFinalPrice():number{
    let finalPrice=0;
    finalPrice = this.calculateSubtotal()-100;
    return finalPrice;

  }


}
