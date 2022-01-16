import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board.component';
import { ColumnComponent } from './column/column.component';
import { BoxComponent } from './box/box.component';
import { CoreModule } from 'src/app/core/core.module';
import { EditBoxComponent } from './edit-box/edit-box.component';
import { CreateBoxComponent } from './create-box/create-box.component';




@NgModule({
  declarations: [
    KanbanBoardComponent,
    ColumnComponent,
    BoxComponent,
    EditBoxComponent,
    CreateBoxComponent,
  ],
  imports: [
    CoreModule
  ]
})
export class KanbanBoardModule { }
