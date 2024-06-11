import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCondominioComponent } from './p-condominio.component';

describe('PCondominioComponent', () => {
  let component: PCondominioComponent;
  let fixture: ComponentFixture<PCondominioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PCondominioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PCondominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
