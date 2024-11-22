import { Injectable } from '@angular/core';
import { ChatItem } from '../shared/chat-list-item/chat-list-item.component';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chats: ChatItem[] = [];

  togglePinChat(chatId: string) {
    const chat = this.chats.find(c => c.id === chatId);
    if (chat) {
      chat.pinned = !chat.pinned;
      // Reorder chats if needed
      this.reorderChats();
    }
  }

  markChatAsUnread(chatId: string) {
    const chat = this.chats.find(c => c.id === chatId);
    if (chat) {
      chat.unread = true;
    }
  }

  deleteChat(chatId: string) {
    this.chats = this.chats.filter(c => c.id !== chatId);
  }

  private reorderChats() {
    // Move pinned chats to the top
    this.chats.sort((a, b) => 
      (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)
    );
  }
}
