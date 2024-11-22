import { Component, OnInit } from '@angular/core';
import { IonItem, IonList } from "@ionic/angular/standalone";
import { PopoverController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-filters-popover',
  templateUrl: './chat-filters-popover.component.html',
  styleUrls: ['./chat-filters-popover.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class ChatFiltersPopoverComponent {

  filters = {
    archivedChats: false,
    hiddenChats: false,
    pinnedChats: false
  };

  constructor(private popoverController: PopoverController) {}

  applyFilters() {
    this.popoverController.dismiss(this.filters);
  }

}
