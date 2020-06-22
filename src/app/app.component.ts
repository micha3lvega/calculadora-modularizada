import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora-modularizada';
  result: number;

  onCalculate(result: number) {
    this.result = result;
  }
}
