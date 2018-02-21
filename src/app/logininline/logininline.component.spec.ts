import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininlineComponent } from './logininline.component';

describe('LogininlineComponent', () => {
  let component: LogininlineComponent;
  let fixture: ComponentFixture<LogininlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogininlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
