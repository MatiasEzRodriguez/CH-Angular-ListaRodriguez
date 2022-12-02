import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnComponent } from './lista-alumn.component';

describe('ListaAlumnComponent', () => {
  let component: ListaAlumnComponent;
  let fixture: ComponentFixture<ListaAlumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
