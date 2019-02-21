import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'confirm-submit-dialog',
  templateUrl: './confirm-submit-dialog.component.html',
  styleUrls: ['./confirm-submit-dialog.component.scss']
})
export class ConfirmSubmitDialogComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmSubmitDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
}
