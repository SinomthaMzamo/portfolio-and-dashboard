import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAvatarFormComponent } from './upload-avatar-form.component';

describe('UploadAvatarFormComponent', () => {
  let component: UploadAvatarFormComponent;
  let fixture: ComponentFixture<UploadAvatarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadAvatarFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAvatarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
