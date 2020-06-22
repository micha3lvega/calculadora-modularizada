import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() resultEmitter = new EventEmitter<number>();

  value1: number;
  value2: number;

  constructor() {}

  ngOnInit() {}

  onCalculate() {
    let result = this.value1 + this.value2;
    this.resultEmitter.emit(result);
  }
}
