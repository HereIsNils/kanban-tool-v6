import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxProps } from 'src/app/core/models/board';

@Component({
  selector: 'app-edit-box',
  templateUrl: './edit-box.component.html',
  styleUrls: ['./edit-box.component.scss']
})
export class EditBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditBoxComponent>,
              @Inject(MAT_DIALOG_DATA) public data: BoxProps ) { 
                if (data === undefined){
                  this.data = {
                    name: "",
                    description: ""
                  }
                }
              }

              onNoClick(): void {
                this.dialogRef.close();
              }

  ngOnInit(): void {
  }

}
