import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsCardComponent } from './actors-card.component';

describe('ActorsCardComponent', () => {
  let component: ActorsCardComponent;
  let fixture: ComponentFixture<ActorsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
