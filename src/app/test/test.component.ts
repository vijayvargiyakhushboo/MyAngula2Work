import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
