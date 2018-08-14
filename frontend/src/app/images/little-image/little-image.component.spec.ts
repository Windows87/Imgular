import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleImageComponent } from './little-image.component';

describe('LittleImageComponent', () => {
  let component: LittleImageComponent;
  let fixture: ComponentFixture<LittleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
