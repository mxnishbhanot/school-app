import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatActionPopoverComponent } from './chat-action-popover.component';

describe('ChatActionPopoverComponent', () => {
  let component: ChatActionPopoverComponent;
  let fixture: ComponentFixture<ChatActionPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChatActionPopoverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatActionPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
