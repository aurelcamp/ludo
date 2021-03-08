import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() value: string;
  @Input() canDelete = false;

  @Output() removeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
