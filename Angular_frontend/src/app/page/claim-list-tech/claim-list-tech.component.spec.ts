import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimListTechComponent } from './claim-list-tech.component';

describe('ClaimListTechComponent', () => {
  let component: ClaimListTechComponent;
  let fixture: ComponentFixture<ClaimListTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimListTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimListTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
