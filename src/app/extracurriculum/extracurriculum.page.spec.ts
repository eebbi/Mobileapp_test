import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurriculumPage } from './extracurriculum.page';

describe('ExtracurriculumPage', () => {
  let component: ExtracurriculumPage;
  let fixture: ComponentFixture<ExtracurriculumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtracurriculumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtracurriculumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
