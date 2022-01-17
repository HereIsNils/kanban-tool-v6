import { Portal } from '@angular/cdk/portal';
import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Board, Box, BoxProps, Column, ColumnProps } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private _board: Board;
  private key = "dataStorageKey";

  private boardChanged = new Subject<object>();

  constructor() { 
    this._board = new Board()
    this.loadBoardLS();
    this.boardChanged.subscribe(() => this.saveBoardLS())
  }

  onBoardChange(): Observable<object>{
    return this.boardChanged.asObservable();
  }

  // saves the board to the local storage
  saveBoardLS(): void {
    localStorage.setItem(this.key, JSON.stringify(this._board.getProps()));
  }

  // gets the data from the local storage and replaces the current board 
  // with the one from the storage
  loadBoardLS():void  {
    let board = localStorage.getItem(this.key)
    if (board !== null){
      this._board = new Board(JSON.parse(board));
    } 
  }

  // replaces the data in the local storage with a new dataset  
  refreshBoardLS(): void {
    localStorage.clear();
    this.saveBoardLS();  
  }

  getColumns(): Column[] {
    return this._board.columns;
  }

  createColumn(props: ColumnProps): Column{
    let column = new Column(props);
    this._board.columns.push(column);
    this.boardChanged.next({});
    return column;
  }

  deleteColumn(id: string) {
    this._board.columns = this._board.columns.filter(c => c.uuid !== id);
    this.boardChanged.next({});
  }

  updateColumn(id: string, props: ColumnProps){
    let storedColumn = new Column(props);
    let i = this._board.columns.findIndex(column => column.uuid === id);
    if (i === -1) return;
    this._board.columns[i] = storedColumn;
    this.boardChanged.next({})
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
    this.boardChanged.next({});
    return box;
  }

  deleteBox(id: string) {
    this._board.columns.forEach(column => {
      column.boxes = column.boxes.filter(b => b.uuid !== id);
    });
    this.boardChanged.next({});
  }

  updateBox(id:string, props: BoxProps) {
    let box = new Box(props);
    
    this._board.columns.forEach(column => {
      let i = column.boxes.findIndex(box => box.uuid === id);
      if (i === -1) return;
      column.boxes[i] = box;
    });
    this.boardChanged.next({});
  }

  moveBox(idBox: string, idOldColumn: string, idNewColumn: string ) {
    let box = this.getBox(idBox);

    this._board.columns.forEach(column => {
      if (column.uuid === idOldColumn) column.boxes = column.boxes.filter(b => b.uuid !== idBox);
      if (column.uuid === idNewColumn) column.boxes.push(box);
    })
    this.boardChanged.next({});
  }
}