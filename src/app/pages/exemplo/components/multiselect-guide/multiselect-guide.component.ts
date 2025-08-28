import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiselectComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

@Component({
  selector: 'app-multiselect-guide',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MultiselectComponent,
    DsCodeBlockComponent,
  ],
  templateUrl: './multiselect-guide.component.html',
  styleUrl: './multiselect-guide.component.scss',
})
export class MultiselectGuideComponent {
  fruits = [
    { id: 1, name: 'Maçã' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Laranja' },
    { id: 4, name: 'Uva' },
    { id: 5, name: 'Manga' },
  ];

  selectedFruits: any[] = [];

  onFruitsChange(selected: any[]) {
    console.log('Selecionados:', selected);
  }
}
