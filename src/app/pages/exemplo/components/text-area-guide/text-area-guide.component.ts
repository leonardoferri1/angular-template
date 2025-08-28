import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAreaComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

@Component({
  selector: 'app-text-area-guide',
  standalone: true,
  imports: [FormsModule, TextAreaComponent, DsCodeBlockComponent],

  templateUrl: './text-area-guide.component.html',
  styleUrl: './text-area-guide.component.scss',
})
export class TextAreaGuideComponent {
  message = '';
  isInvalid = false;

  onValueChange(value: string | null) {
    console.log('Novo valor:', value);
  }

  onBlur() {
    console.log('Input perdeu o foco');
  }
}
