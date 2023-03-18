import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditclaimComponent } from './editclaim.component';

describe('EditclaimComponent', () => {
  let component: EditclaimComponent;
  let fixture: ComponentFixture<EditclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditclaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
