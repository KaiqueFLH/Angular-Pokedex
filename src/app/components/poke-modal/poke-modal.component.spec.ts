import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeModalComponent } from './poke-modal.component';

describe('PokeModalComponent', () => {
  let component: PokeModalComponent;
  let fixture: ComponentFixture<PokeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
