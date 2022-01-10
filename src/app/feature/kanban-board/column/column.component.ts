import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { Column } from 'src/app/core/models/board';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  @Input() column?: Column;

  constructor(private boardService: BoardService) {
  }
}
