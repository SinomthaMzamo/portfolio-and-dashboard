import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolyFormComponent } from './poly-form.component';

describe('PolyFormComponent', () => {
  let component: PolyFormComponent;
  let fixture: ComponentFixture<PolyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
