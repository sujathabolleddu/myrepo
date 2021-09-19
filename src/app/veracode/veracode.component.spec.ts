import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeracodeComponent } from './veracode.component';

describe('VeracodeComponent', () => {
  let component: VeracodeComponent;
  let fixture: ComponentFixture<VeracodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeracodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeracodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
