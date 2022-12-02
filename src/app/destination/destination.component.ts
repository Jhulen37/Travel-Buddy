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
  }
  places = [];
  check = false;

  onClick(){
    if(this.place.id == 0){
        this.places.push({id: (new Date()).getTime(), name: this.place.name});
    }

  }

    constructor() { }

  ngOnInit(): void {
  }

  onEdit(place){
    this.place = place;
}

onDelete(place){
  for(var i = 0;i < this.places.length; i++){
      if(place.id == this.places[i].id){
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

