import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessupdateclaimComponent } from './successupdateclaim.component';

describe('SuccessupdateclaimComponent', () => {
  let component: SuccessupdateclaimComponent;
  let fixture: ComponentFixture<SuccessupdateclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessupdateclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessupdateclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
