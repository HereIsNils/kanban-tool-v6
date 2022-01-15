import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxProps } from 'src/app/core/models/board';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BoxProps, 
              public dialogRef: MatDialogRef<EditBoxComponent>) { }

  ngOnInit(): void {
  }

}
