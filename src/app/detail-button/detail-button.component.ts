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

  constructor() { }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    
  }
}
