import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Box, BoxProps } from 'src/app/core/models/board';
import { BoardService } from 'src/app/core/services/board.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalData } from 'src/app/core/models/board';
import { EditBoxComponent } from '../edit-box/edit-box.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnChanges {

  @Input() boxId?: string;
  box?: Box;

  constructor(private boardService: BoardService, public dialog:MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open<EditBoxComponent, BoxProps | undefined, BoxProps | undefined>(EditBoxComponent, {
      data: this.box?.getProps()
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result === undefined) return;
      if (result.uuid === undefined) return;
      this.boardService.updateBox(result.uuid, result);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['boxId'] && this.boxId !== undefined) {
      this.box = this.boardService.getBox(this.boxId);
    }
  }
}


