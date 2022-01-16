import { Component, Input, OnChanges, SimpleChanges, OnInit, Output } from '@angular/core';
import { BoardService } from 'src/app/core/services/board.service';
import { Box, BoxProps, Column } from 'src/app/core/models/board';
import { KanbanBoardComponent } from '../kanban-board.component';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoxComponent } from '../create-box/create-box.component';


@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() column?: Column;

  constructor(private boardService: BoardService, public dialog:MatDialog) {}

  deleteColumn() {
    if (this.column !== undefined){
      this.boardService.deleteColumn(
      this.column.uuid
      );
    }
  }

  createBox(): void {
    if (this.column !== undefined){
      const dialogRef = this.dialog.open<CreateBoxComponent, BoxProps | undefined, BoxProps | undefined>(CreateBoxComponent, {
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
    if (this.column !== undefined){
      this.boardService.updateColumn(
        this.column.uuid, this.column
      );
    }
  }
}
