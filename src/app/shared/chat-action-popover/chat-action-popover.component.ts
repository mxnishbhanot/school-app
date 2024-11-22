import { Component, Input, OnInit } from '@angular/core';
import { ChatItem } from '../chat-list-item/chat-list-item.component';
import { IonicModule, PopoverController } from '@ionic/angular';
import { ChatService } from 'src/app/services/chat.service';
import { bookmark, bookmarkOutline, mailUnreadOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-chat-action-popover',
  templateUrl: './chat-action-popover.component.html',
  styleUrls: ['./chat-action-popover.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ChatActionPopoverComponent {

  @Input() chat!: ChatItem;

  constructor(
    private popoverController: PopoverController,
    private chatService: ChatService // Assume a service to handle chat operations
  ) {
    addIcons({bookmark, bookmarkOutline,mailUnreadOutline,trashOutline })
  }

  togglePin() {
    this.chatService.togglePinChat(this.chat.id);
    this.popoverController.dismiss();
  }

  markAsUnread() {
    this.chatService.markChatAsUnread(this.chat.id);
    this.popoverController.dismiss();
  }

  deleteChat() {
    this.chatService.deleteChat(this.chat.id);
    this.popoverController.dismiss();
  }

}
