import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectinvitationComponent } from './rejectinvitation.component';

describe('RejectinvitationComponent', () => {
  let component: RejectinvitationComponent;
  let fixture: ComponentFixture<RejectinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectinvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
