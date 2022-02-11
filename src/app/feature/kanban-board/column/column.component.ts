import { Component, Input, OnChanges, SimpleChanges, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { Box, BoxProps, Column } from 'src/app/core/models/board';
import { KanbanBoardComponent } from '../kanban-board.component';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { EditBoxComponent } from '../edit-box/edit-box.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() column?: Column;
  @Input() columnId?: string

  constructor(private boardService: BoardService, public dialog:MatDialog) {}

  deleteColumn(): void {
    if (this.column !== undefined){
      this.boardService.deleteColumn(
      this.column.uuid
      );
    }
  }

  createBox(): void {
    if (this.column !== undefined){
      const dialogRef = this.dialog.open<EditBoxComponent, BoxProps | undefined, BoxProps | undefined>(EditBoxComponent, {
        data: undefined
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result === undefined) return;
          if (this.column?.uuid === undefined) return;
          this.boardService.createBox(this.column.uuid, result);
        });
    }
  }

  onTitleChange(){
    console.log(`on title change fired ${this.column?.name}`)
    if (this.column !== undefined){
      this.boardService.updateColumn(
        this.column.uuid, this.column.getProps()
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columnId'] && this.columnId !== undefined)
    if (this.column !== undefined) {
      this.boardService.updateColumn(this.column.uuid, this.column.getProps())
    }
  }

  drop(event: CdkDragDrop<Box[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.boardService.boardUpdate();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.boardService.boardUpdate();
    }
  }
}
