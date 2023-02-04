import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadesListComponent } from './arcades-list.component';

describe('ArcadesListComponent', () => {
  let component: ArcadesListComponent;
  let fixture: ComponentFixture<ArcadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcadesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
