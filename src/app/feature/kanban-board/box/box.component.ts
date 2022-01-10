import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Box } from 'src/app/core/models/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnChanges {

  @Input() boxId?: string;
  box?: Box;

  constructor(private boardService: BoardService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['boxId'] && this.boxId !== undefined) {
      this.box = this.boardService.getBox(this.boxId);
    }
  }

}
