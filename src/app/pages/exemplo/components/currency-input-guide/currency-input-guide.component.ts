import { Component } from '@angular/core';
import { CurrencyInputComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-input-guide',
  standalone: true,
  imports: [CurrencyInputComponent, FormsModule, DsCodeBlockComponent],
  templateUrl: './currency-input-guide.component.html',
  styleUrl: './currency-input-guide.component.scss',
})
export class CurrencyInputGuideComponent {
  amount = '';
  isInvalid = false;

  onValueChange(value: number | null) {
    console.log('Novo valor:', value);
  }

  onBlur() {
    console.log('Input perdeu o foco');
  }
}
