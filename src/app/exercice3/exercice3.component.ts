import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  status: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  change(){
    if(this.status === true){
      this.status = false;
    }else{
      this.status = true;
    }
  }
}
