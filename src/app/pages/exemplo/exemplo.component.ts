import { Component, signal } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NgIf } from '@angular/common';
import { TextInputGuideComponent } from './components/text-input-guide/text-input-guide.component';
import { TextAreaGuideComponent } from './components/text-area-guide/text-area-guide.component';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [
    MenuComponent,
    GettingStartedComponent,
    NgIf,
    TextInputGuideComponent,
    TextAreaGuideComponent,
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
