import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.css']
})
export class DetailButtonComponent implements OnInit {
allowButtonToBeClicked = false;


  constructor() { }

  ngOnInit() {
  }

}
