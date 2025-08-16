import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTagLineComponent } from './number-tag-line.component';

describe('NumberTagLineComponent', () => {
  let component: NumberTagLineComponent;
  let fixture: ComponentFixture<NumberTagLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberTagLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberTagLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
