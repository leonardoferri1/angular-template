import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NgIf } from '@angular/common';
import { TextInputGuideComponent } from './components/text-input-guide/text-input-guide.component';
import { TextAreaGuideComponent } from './components/text-area-guide/text-area-guide.component';
import { CurrencyInputGuideComponent } from './components/currency-input-guide/currency-input-guide.component';
import { DropdownGuideComponent } from './components/dropdown-guide/dropdown-guide.component';
import { MultiselectGuideComponent } from './components/multiselect-guide/multiselect-guide.component';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [
    MenuComponent,
    GettingStartedComponent,
    NgIf,
    TextInputGuideComponent,
    TextAreaGuideComponent,
    CurrencyInputGuideComponent,
    DropdownGuideComponent,
    MultiselectGuideComponent,
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
