import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

@Component({
  selector: 'app-text-input-guide',
  standalone: true,
  imports: [FormsModule, TextInputComponent, DsCodeBlockComponent],
  templateUrl: './text-input-guide.component.html',
  styleUrl: './text-input-guide.component.scss',
})
export class TextInputGuideComponent {
  name = '';
  isInvalid = false;

  onValueChange(value: string | null) {
    console.log('Novo valor:', value);
  }

  onBlur() {
    console.log('Input perdeu o foco');
  }
}
