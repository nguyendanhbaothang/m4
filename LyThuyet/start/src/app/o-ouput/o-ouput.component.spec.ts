import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OOuputComponent } from './o-ouput.component';

describe('OOuputComponent', () => {
  let component: OOuputComponent;
  let fixture: ComponentFixture<OOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OOuputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
