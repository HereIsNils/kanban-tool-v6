import { Portal } from '@angular/cdk/portal';
import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Board, Box, BoxProps, Column, ColumnProps } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private _board: Board;

  constructor() { 
    this._board = new Board({
      columns: [
        {
          name: "todo",
          boxes: [
            {
              name: "fix this1",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this2",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this3",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this4",
              description: "this porblem needs to be fixed"
            }
          ],
          
        },
        {
          name: "doing",
          boxes: [
            {
              name: "fix this5",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this6",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this7",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this8",
              description: "this porblem needs to be fixed"
            }
          ],
          
        },
        {
          name: "done",
          boxes: [
            {
              name: "fix this9",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this10",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this11",
              description: "this porblem needs to be fixed"
            },
            {
              name: "fix this12",
              description: "this porblem needs to be fixed"
            }
          ],
        },
      ]
    })
  }

  getColumns(): Column[] {
    return this._board.columns;
  }

  createColumn(props: ColumnProps): Column{
    let column = new Column(props);
    this._board.columns.push(column);
    return column;
  }

  deleteColumn(id: string) {
    this._board.columns = this._board.columns.filter(c => c.uuid !== id);
  }

  getBox(id: string):Box {
    let box: Box | undefined;
    this._board.columns.forEach(column => {
      if (box != undefined) return 
      box = column.boxes.find(b => b.uuid == id);
    });
    if (box == undefined) throw new Error("no box found")
    return box;
  }

  createBox(columnId: string, props: BoxProps): Box {
    let box = new Box(props);
    this._board.columns.forEach(column => {
      if (column.uuid === columnId)
        column.boxes.push(box);
    });
    return box;
  }

  deleteBox(id: string) {
    this._board.columns.forEach(column => {
      column.boxes = column.boxes.filter(b => b.uuid !== id);
    });
  }

  updateBox(id:string, props: BoxProps) {
    let box = new Box(props);
    
    this._board.columns.forEach(column => {
      let i = column.boxes.findIndex(box => box.uuid === id);
      if (i === -1) return;
      column.boxes[i] = box;
    });
  }

  moveBox(idBox: string, idOldColumn: string, idNewColumn: string ) {
    let box = this.getBox(idBox);

    this._board.columns.forEach(column => {
      if (column.uuid === idOldColumn) column.boxes = column.boxes.filter(b => b.uuid !== idBox);
      if (column.uuid === idNewColumn) column.boxes.push(box);
    })
  }
}
