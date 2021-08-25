import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from 'src/app/shared/models/List';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css'],
})
export class ListDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ListDialogData
  ) {}

  cancel(): void {
    this.dialogRef.close('cancelled');
  }
}

export interface ListDialogData {
  list: List;
}

export interface ListDialogResult {
  list: List;
}
