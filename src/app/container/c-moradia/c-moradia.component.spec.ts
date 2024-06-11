import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMoradiaComponent } from './c-moradia.component';

describe('CMoradiaComponent', () => {
  let component: CMoradiaComponent;
  let fixture: ComponentFixture<CMoradiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CMoradiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMoradiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
