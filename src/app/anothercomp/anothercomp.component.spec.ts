import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothercompComponent } from './anothercomp.component';

describe('AnothercompComponent', () => {
  let component: AnothercompComponent;
  let fixture: ComponentFixture<AnothercompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnothercompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnothercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
