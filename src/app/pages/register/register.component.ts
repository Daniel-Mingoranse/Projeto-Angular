import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $('#meu-campo-de-valor').maskMoney({
      prefix: 'R$ ',
      decimal: ',',
      thousands: '.'
    });
  }
}
