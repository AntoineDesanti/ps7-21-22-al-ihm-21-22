import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCheckpointComponent } from './map-checkpoint.component';

describe('MapCheckpointComponent', () => {
  let component: MapCheckpointComponent;
  let fixture: ComponentFixture<MapCheckpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCheckpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCheckpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
