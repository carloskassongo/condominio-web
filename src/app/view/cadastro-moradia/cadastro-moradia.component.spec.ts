import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMoradiaComponent } from './cadastro-moradia.component';

describe('CadastroMoradiaComponent', () => {
  let component: CadastroMoradiaComponent;
  let fixture: ComponentFixture<CadastroMoradiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroMoradiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroMoradiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
