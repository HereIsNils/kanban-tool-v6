import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoxProps } from 'src/app/core/models/board';

interface Food {
  value: string;
  viewValue: string;
}

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

              placeholder(): void {
                console.log("placeholder function called!")
              }

  ngOnInit(): void {
  }

}
