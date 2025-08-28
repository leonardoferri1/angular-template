import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    NgIf,
    NgTemplateOutlet,
    NgClass,
    MatTooltipModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  currentRoute: string = '';
  currentLang: any;
  showDropdown = false;
  selected: string | null = null;
  selectedPanel: number = 0;

  constructor() {}

  @Input() opened = true;
  @Output() openedChange = new EventEmitter<boolean>();
  @Output() onNavClose = new EventEmitter<Event>();
  @Output() onPanelSwitch = new EventEmitter<number>();

  toggle() {
    this.opened = !this.opened;
    this.openedChange.emit(this.opened);
  }

  onPanelSwitchEvent(panel: number): void {
    this.selectedPanel = panel;
    this.onPanelSwitch.emit(panel);
  }

  onNavCloseEvent(event: Event): void {
    this.onNavClose.emit(event);
  }

  onToggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
}
