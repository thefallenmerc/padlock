import { Component, OnInit, Input } from '@angular/core';
import { Hint } from '../../../models/hint';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  @Input() hint: Hint;

  constructor() { }

  ngOnInit() {
  }


}
