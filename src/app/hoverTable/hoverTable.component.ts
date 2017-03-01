import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'hover-table',
  template: require('./hoverTable.html')
})

export class HoverTable<T> {
  @Output()
  onEvent = new EventEmitter<string>();
  @Input()
  data: Array<T> = [];
  @Input()
  columns: Array<IDictionary> = [];
  @Input()
  button: string;

  currentPage: Number = 0;
  totalPages: Number;
  pages = [];

  private index: number = -1;

  constructor() {
  }

  sendEvent(code: string, i: number) {
    this.index = i;
    this.onEvent.emit(code);
  }

}
export interface IDictionary {
  key: string;
  value: string;
}
