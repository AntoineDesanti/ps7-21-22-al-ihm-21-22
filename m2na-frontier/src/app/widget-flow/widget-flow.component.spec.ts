import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFlowComponent } from './widget-flow.component';

describe('WidgetFlowComponent', () => {
  let component: WidgetFlowComponent;
  let fixture: ComponentFixture<WidgetFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
