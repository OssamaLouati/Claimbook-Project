import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectClaimComponent } from './reject-claim.component';

describe('RejectClaimComponent', () => {
  let component: RejectClaimComponent;
  let fixture: ComponentFixture<RejectClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
