import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination.module';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {
  destinations: Destination[] = [];

  constructor(private destinService: DestinationService) { }

  ngOnInit() {
this.destinations = this.destinService.getDesinations();
  }

}
