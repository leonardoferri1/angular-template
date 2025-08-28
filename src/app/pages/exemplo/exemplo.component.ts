import { Component, signal } from '@angular/core';
import { TextInputComponent } from '@leonardoferri/angular-design-system';
import { TextAreaComponent } from '@leonardoferri/angular-design-system';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [
    TextInputComponent,
    TextAreaComponent,
    MenuComponent,
    GettingStartedComponent,
    NgIf,
  ],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.scss',
})
export class ExemploComponent {
  selectedPanel: number = 0;
  menuOpened = true;

  onPanelSwitch(panel: any) {
    this.selectedPanel = panel;
  }
}
