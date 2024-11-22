import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { chatbubblesOutline, calendarOutline, megaphoneOutline, personCircleOutline } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DashboardPage } from 'src/app/pages/dashboard/dashboard.page';
import { ChatListPage } from 'src/app/pages/chat-list/chat-list.page';
import { EventListPage } from 'src/app/pages/event-list/event-list.page';
import { ProfilePage } from "../../pages/auth/profile/profile.page";
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, DashboardPage, ChatListPage, EventListPage, ProfilePage]
})
export class TabsComponent  implements OnInit {
  constructor() {
    addIcons({ chatbubblesOutline, calendarOutline, megaphoneOutline, personCircleOutline });
  }

  ngOnInit() {
  
  }

  
}
