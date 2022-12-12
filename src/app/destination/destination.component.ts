import { Component, OnInit } from '@angular/core';
import { DestinationService } from './destination.service';
import { Destination } from './destination.module';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  newDestinations= '';

  saveDestin() {
    if(this.newDestinations) {
  let destinations = this.newDestinations;
  //destinations.name = this.newDestinations;
  this.destinations.push();
  this.newDestinations = '';
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

 //onEdit(item: any){
 //   this.place = item;
//}

//onDelete( item: any){
   //     if(this.place.name){
   //       this.places.splice;

   //   }
 // }
}


