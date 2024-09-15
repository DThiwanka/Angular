import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  showstart() {
    alert('Get Started');
    console.log('Get Started')
  }

  showProceed() {
    alert('Proceeding...!');
    console.log('Proceeding...!')
  }

}
