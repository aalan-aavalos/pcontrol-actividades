import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdmComponent } from './sidebar-adm.component';

describe('SidebarAdmComponent', () => {
  let component: SidebarAdmComponent;
  let fixture: ComponentFixture<SidebarAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarAdmComponent]
    });
    fixture = TestBed.createComponent(SidebarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
