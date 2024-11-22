import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal, searchOutline, createOutline, people, checkmarkDoneOutline, archiveOutline, trashOutline, chatbubbleOutline } from 'ionicons/icons';
import { ChatFiltersPopoverComponent } from 'src/app/shared/chat-filters-popover/chat-filters-popover.component';
import { ChatItem, ChatListItemComponent } from "../../shared/chat-list-item/chat-list-item.component";
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ChatListItemComponent]
})
export class ChatListPage {
  isSearchBarVisible = false;
  chatFilters = {
    archivedChats: false,
    hiddenChats: false,
    pinnedChats: false
  };
  constructor(private popoverController: PopoverController  ){
    addIcons({ellipsisHorizontal, searchOutline,createOutline, people, checkmarkDoneOutline, archiveOutline, trashOutline, chatbubbleOutline});
  }

  chats: ChatItem[] = [
    {
      id: "1",
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: new Date("2024-11-20T18:45:00"),
      unread: true,
      pinned: true,
      avatar: "/assets/shapes.svg",
    },
    {
      id: "2",
      name: "Jane Smith",
      lastMessage: "See you tomorrow!",
      timestamp: new Date("2024-11-21T09:30:00"),
      unread: false,
      pinned: false,
      avatar: "/assets/shapes.svg",
    },
    {
      id: "3",
      name: "Emily Davis",
      lastMessage: "Can you send me the document?",
      timestamp: new Date("2024-11-21T12:15:00"),
      unread: true,
      pinned: false,
      avatar: "/assets/shapes.svg",
    },
    {
      id: "4",
      name: "Michael Brown",
      lastMessage: "Thanks for the update.",
      timestamp: new Date("2024-11-20T20:00:00"),
      unread: false,
      pinned: false,
      avatar: "/assets/shapes.svg",
    },
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  }

  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible;
  }

  async presentFilterPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ChatFiltersPopoverComponent,
      event: ev,
      componentProps: {
        filters: this.chatFilters
      }
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (data) {
      this.chatFilters = data;
      this.applyFilters();
    }
  }

  onSearch(event: any) {
    const searchTerm = event.detail.value;
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  }

  applyFilters() {
    // Implement filter application logic here
    console.log('Applied filters:', this.chatFilters);
  }
}
