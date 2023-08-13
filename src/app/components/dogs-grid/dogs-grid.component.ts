import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, OperatorFunction } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';

@Component({
  selector: 'app-dogs-grid',
  templateUrl: './dogs-grid.component.html',
  styleUrls: ['./dogs-grid.component.css']
})
export class DogsGridComponent {

  @Input() dogs$: Observable<DogResponse[]> | undefined;
  @Output() pageEventChange: EventEmitter<string> = new EventEmitter();
  pageIndex = 0;

  onPageChange(event: PageEvent) {
    this.pageEventChange.emit(event.pageIndex.toString());
  }
}
