import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterTabsComponent } from './outer-tabs.component';

describe('OuterTabsComponent', () => {
  let component: OuterTabsComponent;
  let fixture: ComponentFixture<OuterTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
