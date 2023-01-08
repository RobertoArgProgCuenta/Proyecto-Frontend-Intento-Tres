import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLinkComponent } from './side-link.component';

describe('SideLinkComponent', () => {
  let component: SideLinkComponent;
  let fixture: ComponentFixture<SideLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
