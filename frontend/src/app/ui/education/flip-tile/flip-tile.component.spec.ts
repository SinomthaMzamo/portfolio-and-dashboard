import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipTileComponent } from './flip-tile.component';

describe('FlipTileComponent', () => {
  let component: FlipTileComponent;
  let fixture: ComponentFixture<FlipTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
