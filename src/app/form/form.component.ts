import { Component } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
  
export class FormComponent {

  name = new FormControl('');
  email = new FormControl('');

  save() {
    alert(this.name.value + ' ' + this.email.value);
    this.name.reset();
    this.email.reset();
  }

}
