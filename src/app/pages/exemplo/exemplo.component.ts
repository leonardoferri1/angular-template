import { Component } from '@angular/core';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { NgIf } from '@angular/common';
import { TextInputGuideComponent } from './components/text-input-guide/text-input-guide.component';
import { TextAreaGuideComponent } from './components/text-area-guide/text-area-guide.component';
import { CurrencyInputGuideComponent } from './components/currency-input-guide/currency-input-guide.component';
import { DropdownGuideComponent } from './components/dropdown-guide/dropdown-guide.component';
import { MultiselectGuideComponent } from './components/multiselect-guide/multiselect-guide.component';
import { SidenavGuideComponent } from './components/sidenav-guide/sidenav-guide.component';
import { DatePickerGuideComponent } from './components/date-picker-guide/date-picker-guide.component';

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
    SidenavGuideComponent,
    DatePickerGuideComponent,
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
