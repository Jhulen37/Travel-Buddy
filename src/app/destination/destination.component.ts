import { Component, OnInit } from '@angular/core';
import { Destin } from './destin';
//import { DestinationService } from './destination.service';
//import { Destination } from './destination.module';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

export class DestinationComponent implements OnInit {
   destinations: Destin[] = [];
  newDestination= '';

  saveDestin() {
    if(this.newDestination) {
  let destination = new Destin;
  destination.name = this.newDestination;
  destination.isCompleted = true
  this.destinations.push(destination);
  this.newDestination = '';
    }
    else(alert('Please enter Destinations'))
  }


  //place = {
 //   name: '',
 //  };

 // places = [];
 // check = false;

 // onClick(){
  //  if(this.place.name == ''){
   //   this.places.push.name;
      //{id: (new Date()).getTime(),name: this.place.name}

  //  this.place = {
  //    name: ''
   // }
   // }
   //  }

     constructor() { }

     ngOnInit() {
    }

 onEdit(){
   this.destinations = this.destinations;
}

onDelete(){
       if(this.saveDestin.name){
        this.destinations.slice();


    }
 }
}


