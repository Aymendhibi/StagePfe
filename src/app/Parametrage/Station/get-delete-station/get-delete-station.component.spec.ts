import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteStationComponent } from './get-delete-station.component';

describe('GetDeleteStationComponent', () => {
  let component: GetDeleteStationComponent;
  let fixture: ComponentFixture<GetDeleteStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeleteStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDeleteStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
