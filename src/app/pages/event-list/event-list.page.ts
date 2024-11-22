import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EventListPage implements OnInit {
  events = [
    { title: 'Sports Day', date: '2024-12-01', description: 'Annual sports day event.' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
