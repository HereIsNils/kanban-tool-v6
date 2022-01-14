import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalData } from 'src/app/core/models/board';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-modal',
  templateUrl: '../../../core/util/modal.component.html',
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponentDialog, {
      data: {
        name: "test",
        descripiton: "omegaLUL",
      },
    });
  }
}

@Component({
  selector: 'app-modal',
  templateUrl: '../../../core/util/modal.component.html',
})
export class ModalComponentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData) {}
}