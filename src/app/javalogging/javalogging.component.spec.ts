import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaloggingComponent } from './javalogging.component';

describe('JavaloggingComponent', () => {
  let component: JavaloggingComponent;
  let fixture: ComponentFixture<JavaloggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaloggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaloggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
