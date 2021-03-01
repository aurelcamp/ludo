import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddGameComponent } from './manager-add-game.component';

describe('ManagerAddGameComponent', () => {
  let component: ManagerAddGameComponent;
  let fixture: ComponentFixture<ManagerAddGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
