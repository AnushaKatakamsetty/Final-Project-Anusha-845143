import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEditProfileComponent } from './bedit-profile.component';

describe('BEditProfileComponent', () => {
  let component: BEditProfileComponent;
  let fixture: ComponentFixture<BEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
