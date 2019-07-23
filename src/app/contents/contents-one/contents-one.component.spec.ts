import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsOneComponent } from './contents-one.component';

describe('ContentsOneComponent', () => {
  let component: ContentsOneComponent;
  let fixture: ComponentFixture<ContentsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
