import { Component, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  place = {
    name: '',
   };

  places = [];
  check = false;

  onClick(){
    if(this.place.name == ''){
      this.places.push.name;
      //{id: (new Date()).getTime(),name: this.place.name}

    this.place = {
      name: ''
    }
    }
     }

     constructor() { }

     ngOnInit() {
    }

  onEdit(item: any){
    this.place = item;
}

onDelete( item: any){
        if(this.place.name){
          this.places.splice;

      }
  }
}


