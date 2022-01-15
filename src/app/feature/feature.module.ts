import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KanbanBoardModule,
  ],
  exports: [
    KanbanBoardModule
  ]
})
export class FeatureModule { }
