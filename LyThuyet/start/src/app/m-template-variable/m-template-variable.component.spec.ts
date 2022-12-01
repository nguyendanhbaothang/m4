import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTemplateVariableComponent } from './m-template-variable.component';

describe('MTemplateVariableComponent', () => {
  let component: MTemplateVariableComponent;
  let fixture: ComponentFixture<MTemplateVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTemplateVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
