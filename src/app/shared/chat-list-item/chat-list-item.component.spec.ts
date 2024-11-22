import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChatListItemComponent } from './chat-list-item.component';

describe('ChatListItemComponent', () => {
  let component: ChatListItemComponent;
  let fixture: ComponentFixture<ChatListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChatListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
