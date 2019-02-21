import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {ConfirmSubmitDialogComponent} from '../confirm-submit-dialog/confirm-submit-dialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'edit-country',
    templateUrl: './edit-country.component.html',
    styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
    matcher = new MyErrorStateMatcher();
    reportForm: FormGroup = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        name: new FormControl('', [
            Validators.required
        ]),
        message: new FormControl('', [
            Validators.required
        ])
    });
    @ViewChild('form') form: FormGroup;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    submit() {
        if (this.reportForm.valid) {
            this.dialog.open(ConfirmSubmitDialogComponent, {
                width: '99%',
                data: this.reportForm.value
            });
        }
    }
}
