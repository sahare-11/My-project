import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCoveredComponent } from './who-covered.component';

describe('WhoCoveredComponent', () => {
  let component: WhoCoveredComponent;
  let fixture: ComponentFixture<WhoCoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoCoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
