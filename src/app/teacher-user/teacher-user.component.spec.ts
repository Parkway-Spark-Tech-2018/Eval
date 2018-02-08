import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherUserComponent } from './teacher-user.component';

describe('TeacherUserComponent', () => {
  let component: TeacherUserComponent;
  let fixture: ComponentFixture<TeacherUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
