import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { v4 as uuidv4 } from 'uuid';

export interface BoardProps {
    columns: ColumnProps[];
}

export interface ColumnProps {
    uuid?: string;
    name: string;
    boxes: BoxProps[];
}

export interface BoxProps {
    uuid?: string;
    name: string;
    description: string;
}

export interface ModalData {
    name: string;
    description: string;
  }

export class Box {
    private _uuid: string;
    private _name: string;
    private _description: string;

    constructor(props: BoxProps){
        this._uuid = props.uuid ?? uuidv4();
        this._name = props.name;
        this._description = props.description;
    }

    get uuid(): string { 
        return this._uuid;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    } 

    get description(): string {
        return this._description;
    }

    set description(newDesc: string) {
        this._description = newDesc;
    }

    getProps(): BoxProps{
        return {
            uuid: this.uuid,
            name: this.name,
            description: this.description
        }
    }
}

export class Column {
    private _uuid: string;
    private _name: string;
    private _boxes: Box[];

    constructor(props: ColumnProps) {
        this._uuid = props.uuid ?? uuidv4();
        this._name = props.name;
        this._boxes = props.boxes.map(b => new Box(b));
    }

    get uuid(): string { 
        return this._uuid;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    } 

    get boxes(): Box[] {
        return this._boxes;
    }

    set boxes(newBox: Box[]) {
        this._boxes = newBox;
    }

    getProps(): ColumnProps{
        return {
            uuid: this.uuid,
            name: this.name,
            boxes: this.boxes.map(b => b.getProps())
        }
    }
}

export class Board {
    private _columns: Column[];

    constructor(props: BoardProps) {
        this._columns = props.columns.map(c => new Column(c));
    }

    get columns(): Column[] {
        return this._columns;
    }

    set columns(newColum: Column[]) {
        this._columns = newColum;
    }

    getProps(): BoardProps{
        return {
            columns: this.columns.map(c => c.getProps())
        }
    }
}