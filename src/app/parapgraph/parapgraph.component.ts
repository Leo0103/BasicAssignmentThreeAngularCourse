import { Component, OnInit } from '@angular/core';
import { DetailButtonComponent } from '../detail-button/detail-button.component';
@Component({
  selector: 'app-parapgraph',
  templateUrl: './parapgraph.component.html',
  styleUrls: ['./parapgraph.component.css']
})
export class ParapgraphComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() { }

  ngOnInit() {
  }

  

}
