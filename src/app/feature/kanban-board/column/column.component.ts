import { Component, Input, OnChanges, SimpleChanges, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { Column } from 'src/app/core/models/board';
import { KanbanBoardComponent } from '../kanban-board.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

  @Input() column?: Column;

  constructor(private boardService: BoardService) {
  }

  deleteColumn() {
    if (this.column !== undefined){
      this.boardService.deleteColumn(
      this.column.uuid
      )
    }
  }

  onTitleChange(){
    if (this.column !== undefined){
      /*this.boardService.updateColumn(
        this.column.uuid
      )*/
    }
  }
}
