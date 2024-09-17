import { Component } from '@angular/core';


export interface Employee { 
  id: string;
  name: string;
  email: string;
  password: string;

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
  
export class TableComponent {


  employees: Employee[] = [
  
    { id: '1', name: 'Senuri Nilaksha', email: 'senurinilaksha@mail.com', password: '123' },
    { id: '2', name: 'Dulaj Thiwanka', email: 'dthiwanka@mail.com', password: '123' },
    { id: '3', name: 'Dilini', email: 'dilini@mail.com', password: '123' },
    { id: '4', name: 'Kasun', email: 'kasun@mail.com', password: '123' },
    { id: '5', name: 'Dilshan', email: 'dilshan@mail.com', password: '123' },

  ];

}

