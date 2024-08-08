import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoreComponent } from './catogore.component';

describe('CatogoreComponent', () => {
  let component: CatogoreComponent;
  let fixture: ComponentFixture<CatogoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
