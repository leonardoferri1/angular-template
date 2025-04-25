import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TextInputComponent } from '../../shared/components/web-components/text-input/text-input.component';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [TextInputComponent],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.scss',
})
export class ExemploComponent {}
