import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestsolutionComponent } from './suggestsolution.component';

describe('SuggestsolutionComponent', () => {
  let component: SuggestsolutionComponent;
  let fixture: ComponentFixture<SuggestsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestsolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
