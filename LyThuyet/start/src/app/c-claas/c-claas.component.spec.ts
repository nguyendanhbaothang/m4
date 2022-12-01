import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CClaasComponent } from './c-claas.component';

describe('CClaasComponent', () => {
  let component: CClaasComponent;
  let fixture: ComponentFixture<CClaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CClaasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CClaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
