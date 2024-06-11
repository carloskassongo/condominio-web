import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCondominioComponent } from './painel-condominio.component';

describe('PainelCondominioComponent', () => {
  let component: PainelCondominioComponent;
  let fixture: ComponentFixture<PainelCondominioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PainelCondominioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelCondominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
