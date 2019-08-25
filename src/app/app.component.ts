import { Component, OnInit } from '@angular/core';
import { Hint } from '../models/hint';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hints: Array<any> = [
    new Hint([2, 9, 1], 'One number is correct and at the right place'),
    new Hint([2, 4, 5], 'One number is correct but in the wrong place'),
    new Hint([4, 6, 3], 'Two numbers are correct but at the wrong place'),
    new Hint([5, 7, 8], 'Nothing is correct'),
    new Hint([5, 6, 9], 'One number is correct but in the wrong place'),
  ];

  answer0 = 0;
  answer1 = 0;
  answer2 = 0;

  private realAnswer = '246';


  ngOnInit() {
  }

  clearAnswer(e) {
    switch (e) {
      case 0: this.answer0 = null; break;
      case 1: this.answer1 = null; break;
      case 2: this.answer2 = null; break;
    }
  }

  submitAnswer() {
    const userAnswer = this.answer0 + '' + this.answer1 + '' + this.answer2;
    if (userAnswer == this.realAnswer) {
      Swal.fire('Right Answer', '', 'success');
    } else {
      Swal.fire('Wrong Answer', '', 'error');
    }
  }
}
