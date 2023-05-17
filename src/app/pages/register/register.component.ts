import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(){

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

