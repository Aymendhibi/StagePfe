import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteUsersComponent } from './get-delete-users.component';

describe('GetDeleteUsersComponent', () => {
  let component: GetDeleteUsersComponent;
  let fixture: ComponentFixture<GetDeleteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeleteUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDeleteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
