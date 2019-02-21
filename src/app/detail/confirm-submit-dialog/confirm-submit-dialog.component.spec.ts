import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSubmitDialogComponent } from './confirm-submit-dialog.component';

describe('ConfirmSubmitDialogComponent', () => {
  let component: ConfirmSubmitDialogComponent;
  let fixture: ComponentFixture<ConfirmSubmitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmSubmitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSubmitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
