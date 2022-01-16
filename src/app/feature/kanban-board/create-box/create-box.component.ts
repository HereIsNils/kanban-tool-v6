import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxProps } from 'src/app/core/models/board';

@Component({
  selector: 'app-create-box',
  templateUrl: './create-box.component.html',
  styleUrls: ['./create-box.component.scss']
})
export class CreateBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: BoxProps, 
              public dialogRef: MatDialogRef<CreateBoxComponent>) { }

              onNoClick(): void {
                this.dialogRef.close();
              }

  ngOnInit(): void {
  }

}
