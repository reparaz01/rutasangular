import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollatzcomponentComponent } from './collatzcomponent.component';

describe('CollatzcomponentComponent', () => {
  let component: CollatzcomponentComponent;
  let fixture: ComponentFixture<CollatzcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollatzcomponentComponent]
    });
    fixture = TestBed.createComponent(CollatzcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
