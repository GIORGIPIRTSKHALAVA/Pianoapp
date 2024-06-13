import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoCoversComponent } from './piano-covers.component';

describe('PianoCoversComponent', () => {
  let component: PianoCoversComponent;
  let fixture: ComponentFixture<PianoCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PianoCoversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
