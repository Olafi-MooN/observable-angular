import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrmaoComponent } from './irmao.component';

describe('IrmaoComponent', () => {
  let component: IrmaoComponent;
  let fixture: ComponentFixture<IrmaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrmaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrmaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
