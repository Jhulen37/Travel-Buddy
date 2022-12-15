import { Component, OnInit } from '@angular/core';
import { Destin } from './destin';


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


     constructor() { }

     ngOnInit() {

    }

  }




