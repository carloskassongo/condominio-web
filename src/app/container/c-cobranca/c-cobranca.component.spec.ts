import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCobrancaComponent } from './c-cobranca.component';

describe('CCobrancaComponent', () => {
  let component: CCobrancaComponent;
  let fixture: ComponentFixture<CCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CCobrancaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
