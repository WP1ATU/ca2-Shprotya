import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcharacter } from './addcharacter';

describe('Addcharacter', () => {
  let component: Addcharacter;
  let fixture: ComponentFixture<Addcharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addcharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
