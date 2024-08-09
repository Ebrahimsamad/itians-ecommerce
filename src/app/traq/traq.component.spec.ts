import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraqComponent } from './traq.component';

describe('TraqComponent', () => {
  let component: TraqComponent;
  let fixture: ComponentFixture<TraqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
