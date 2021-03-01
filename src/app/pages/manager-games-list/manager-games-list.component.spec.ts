import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGamesListComponent } from './manager-games-list.component';

describe('ManagerGamesListComponent', () => {
  let component: ManagerGamesListComponent;
  let fixture: ComponentFixture<ManagerGamesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerGamesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
