import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetahComponent } from './carpetah.component';

describe('CarpetahComponent', () => {
  let component: CarpetahComponent;
  let fixture: ComponentFixture<CarpetahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarpetahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarpetahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
