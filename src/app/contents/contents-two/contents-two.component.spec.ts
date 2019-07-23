import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsTwoComponent } from './contents-two.component';

describe('ContentsTwoComponent', () => {
  let component: ContentsTwoComponent;
  let fixture: ComponentFixture<ContentsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
