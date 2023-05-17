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
   var textArea = document.getElementById('descricao') as HTMLTextAreaElement; 
   
   console.log(textArea )
   
   for(let i=0; i<= input.length; i++){
     input[i].value = ''
   }
  }
}
