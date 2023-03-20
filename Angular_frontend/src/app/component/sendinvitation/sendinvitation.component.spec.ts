import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendinvitationComponent } from './sendinvitation.component';

describe('SendinvitationComponent', () => {
  let component: SendinvitationComponent;
  let fixture: ComponentFixture<SendinvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendinvitationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendinvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
