import { Routes } from '@angular/router';
import { KanbanBoardComponent } from '../feature/kanban-board/kanban-board.component';

export const AppRoutes: Routes = [
  {
    path: '**',
    component: KanbanBoardComponent,
  }
];