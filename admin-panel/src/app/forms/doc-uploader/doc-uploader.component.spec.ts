import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUploaderComponent } from './doc-uploader.component';

describe('DocUploaderComponent', () => {
  let component: DocUploaderComponent;
  let fixture: ComponentFixture<DocUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocUploaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
