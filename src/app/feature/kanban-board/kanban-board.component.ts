import { Component, OnInit } from '@angular/core';
import { Board, Column } from 'src/app/core/models/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  columns?: Column[];

  constructor(private boardService: BoardService) { 
  }

  ngOnInit(): void {
    this.refreshColumns();
  }

  private refreshColumns(): void {
    this.columns = this.boardService.getColumns();
  }

  createColumn() {
    this.boardService.createColumn({
      name: "new Column",
      boxes: []
    })
    this.refreshColumns();
  }
}
