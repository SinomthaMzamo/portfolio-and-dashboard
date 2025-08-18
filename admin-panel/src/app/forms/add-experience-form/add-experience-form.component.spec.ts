import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceFormComponent } from './add-experience-form.component';

describe('AddExperienceFormComponent', () => {
  let component: AddExperienceFormComponent;
  let fixture: ComponentFixture<AddExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExperienceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
