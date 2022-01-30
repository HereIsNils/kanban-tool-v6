import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Board, Column } from 'src/app/core/models/board';
import { BoardService } from 'src/app/core/services/board.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit, OnDestroy {

  columns?: Column[];
  private boardChangeSubscription: Subscription;

  constructor(private boardService: BoardService) { 
    this.boardChangeSubscription = boardService.onBoardChange().subscribe(() => this.refreshColumns())
  }

  ngOnInit(): void {
    this.refreshColumns();
  }

  ngOnDestroy(): void {
    this.boardChangeSubscription.unsubscribe();
  }

  public refreshColumns(): void {
    this.columns = this.boardService.getColumns();
  }

  createColumn() {
    this.boardService.createColumn({
      name: "new Column",
      boxes: []
    })
    this.refreshColumns();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
