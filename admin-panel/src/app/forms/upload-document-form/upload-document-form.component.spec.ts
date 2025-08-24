import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentFormComponent } from './upload-document-form.component';

describe('UploadDocumentFormComponent', () => {
  let component: UploadDocumentFormComponent;
  let fixture: ComponentFixture<UploadDocumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadDocumentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
