import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsAllComponent } from './contents-all.component';

describe('ContentsAllComponent', () => {
  let component: ContentsAllComponent;
  let fixture: ComponentFixture<ContentsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
