import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatFiltersPopoverComponent } from './chat-filters-popover.component';

describe('ChatFiltersPopoverComponent', () => {
  let component: ChatFiltersPopoverComponent;
  let fixture: ComponentFixture<ChatFiltersPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChatFiltersPopoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatFiltersPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
