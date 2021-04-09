import { ComponentFixture, TestBed } from '@angular/core/testing';

import { candidatesListComponent } from './candidate-list.component';

describe('candidatesListComponent', () => {
  let component: candidatesListComponent;
  let fixture: ComponentFixture<candidatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ candidatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(candidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
