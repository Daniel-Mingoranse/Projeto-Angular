import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
})
export class ModifyComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    
  }
  clear() {
   let input  = document.querySelectorAll('input');
   console.log(input)
   //  for(let i=0; i<= input.lenght; i++){
  //    input[i].value = 'null'
  //  }
  }
}
