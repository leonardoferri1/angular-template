import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown-guide',
  standalone: true,
  imports: [DropdownComponent, FormsModule, DsCodeBlockComponent],

  templateUrl: './dropdown-guide.component.html',
  styleUrl: './dropdown-guide.component.scss',
})
export class DropdownGuideComponent implements OnInit {
  countries: Country[] = [];
  selectedCountry!: Country | null;

  ngOnInit() {
    this.countries = [
      { name: 'Brasil', code: 'BR' },
      { name: 'Estados Unidos', code: 'US' },
      { name: 'Alemanha', code: 'DE' },
      { name: 'Japão', code: 'JP' },
    ];
  }

  onCountryChange(event: any) {
    console.log('Selecionado:', event.value);
  }
}
