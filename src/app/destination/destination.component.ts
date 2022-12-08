import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  place = {
    name: '',
    id: 0
  };

  places = [];
  check = false;

  onClick(){
    if(this.place.id == 0){
      this.places.push();
    }
    this.place = {
      name: '',
      id: 0
    };
     }

     constructor() { }

     ngOnInit(): void {
    }

  onEdit(item: any){
    this.place = item;
}

onDelete( item: any){
  for(var i = 0; i < this.places.length; i++){
      if(this.place.id ==this.places[i]){
          this.places.splice(i,1);
          break;
      }
  }
}

unChecked(){
 if(this.check == !true)
 return
}

    }
