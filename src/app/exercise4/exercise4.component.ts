import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css']
})
export class Exercise4Component implements OnInit {
  texts: object = [
    {value: 1},
    {value: 2},
    {value: 3}

  ]
  constructor() { }

  ngOnInit() {
  }

}
