import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { megaphoneOutline, calendarOutline } from 'ionicons/icons';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DashboardPage {
  selectedSegment = 'announcements';
  
  announcements: any[] = [
    // { title: 'Exam next week', date: '2024-11-25', description: 'Exam for all students.' }
  ];

  events = [
    { title: 'Sports Day', date: '2024-12-01', description: 'Annual sports day event.' }
  ];

  constructor(){
    addIcons({megaphoneOutline, calendarOutline})
  }
  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
