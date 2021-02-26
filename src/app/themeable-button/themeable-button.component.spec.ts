import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeableButtonComponent } from './themeable-button.component';

describe('ThemeableButtonComponent', () => {
  let component: ThemeableButtonComponent;
  let fixture: ComponentFixture<ThemeableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeableButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
