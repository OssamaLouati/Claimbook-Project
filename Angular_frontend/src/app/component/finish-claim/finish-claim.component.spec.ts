import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishClaimComponent } from './finish-claim.component';

describe('FinishClaimComponent', () => {
  let component: FinishClaimComponent;
  let fixture: ComponentFixture<FinishClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
