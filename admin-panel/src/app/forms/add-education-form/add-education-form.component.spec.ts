import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationFormComponent } from './add-education-form.component';

describe('AddEducationFormComponent', () => {
  let component: AddEducationFormComponent;
  let fixture: ComponentFixture<AddEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEducationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
