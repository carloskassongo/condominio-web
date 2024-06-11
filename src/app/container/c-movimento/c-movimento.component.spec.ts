import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMovimentoComponent } from './c-movimento.component';

describe('CMovimentoComponent', () => {
  let component: CMovimentoComponent;
  let fixture: ComponentFixture<CMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CMovimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
