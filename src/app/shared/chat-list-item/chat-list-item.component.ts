import { Component, Input, OnInit } from '@angular/core';
import { IonItem } from "@ionic/angular/standalone";
import { PopoverController, IonicModule } from '@ionic/angular';
import { ChatActionPopoverComponent } from '../chat-action-popover/chat-action-popover.component';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ChatListItemComponent  {

  @Input() chat!: ChatItem;

  private touchStartTime: number = 0;
  private longPressDuration = 500; // milliseconds
  private longPressTimer: any;

  constructor(private popoverController: PopoverController) {}

  onTouchStart(event: TouchEvent) {
    this.touchStartTime = new Date().getTime();
    this.longPressTimer = setTimeout(() => {
      this.showLongPressMenu(event);
    }, this.longPressDuration);
  }

  onTouchEnd(event: TouchEvent) {
    this.clearLongPressTimer();
  }

  onMouseDown(event: MouseEvent) {
    this.touchStartTime = new Date().getTime();
    this.longPressTimer = setTimeout(() => {
      this.showLongPressMenu(event);
    }, this.longPressDuration);
  }

  onMouseUp(event: MouseEvent) {
    this.clearLongPressTimer();
  }

  private clearLongPressTimer() {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
    }
  }

  async showLongPressMenu(event: any) {
    const popover = await this.popoverController.create({
      component: ChatActionPopoverComponent,
      event: event,
      componentProps: {
        chat: this.chat
      }
    });

    await popover.present();
  }

  formatTimestamp(timestamp: Date): string {
    // Implement timestamp formatting logic
    return timestamp.toLocaleTimeString();
  }

  getUnreadCount(): number {
    // Implement unread count logic
    return 1;
  }

}

export interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread?: boolean;
  pinned?: boolean;
  avatar?: string;
}