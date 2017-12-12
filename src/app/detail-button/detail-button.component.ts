import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.css']
})
export class DetailButtonComponent implements OnInit {
allowButtonToBeClicked = false;
serverCreationStatus = 'No server was created!';
serverName = 'Testserver';
serverCreated = false;
servers: number = 0;
createArray = [];


  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.serverCreated = !this.serverCreated;
    this.createArray.push(this.createArray.length + 1);
    console.log(this.createArray);
  }


}
