import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptinvitationComponent } from './acceptinvitation.component';

describe('AcceptinvitationComponent', () => {
  let component: AcceptinvitationComponent;
  let fixture: ComponentFixture<AcceptinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptinvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
