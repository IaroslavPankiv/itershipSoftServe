import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsThreeComponent } from './contents-three.component';

describe('ContentsThreeComponent', () => {
  let component: ContentsThreeComponent;
  let fixture: ComponentFixture<ContentsThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
