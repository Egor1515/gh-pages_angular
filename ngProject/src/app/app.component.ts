import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'ngProject';
  onAddMore(){
    console.log('Btn Clicked')
  }
}
