import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeleteProduitComponent } from './get-delete-produit.component';

describe('GetDeleteProduitComponent', () => {
  let component: GetDeleteProduitComponent;
  let fixture: ComponentFixture<GetDeleteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeleteProduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDeleteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
