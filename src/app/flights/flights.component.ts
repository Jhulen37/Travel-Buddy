import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})

export class FlightsComponent implements OnInit {
public flightOptions: {
  airline: string;
  planeNumber: number;
  location: string;
  departureTime: string;
  arrivalTime: string; }[];
flights: any;

  constructor() { }

  ngOnInit() {
    this.flightOptions=[
      {airline: ' Southwest  |  ', planeNumber: 344, location: '  Georgia  -', departureTime: '  |  5:00 pm  ', arrivalTime: '|  10:00pm  '},
      {airline: ' JetBlue  |  ', planeNumber: 63, location: '  New York  -', departureTime: '  |  7:00 pm  ', arrivalTime: '|  11:00pm  '},
      {airline: ' Delta  |  ', planeNumber: 156, location: '  Jamestown  -', departureTime: '  |  1:00 pm  ', arrivalTime: '|  5:00pm  '},
      {airline: ' United  |  ', planeNumber: 201, location: '  St. Louis  -', departureTime: '  |  3:00 pm  ', arrivalTime: '|  8:00pm  '}
    ]
  }

}
