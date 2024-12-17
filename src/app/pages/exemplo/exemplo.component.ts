import { Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.scss',
})
export class ExemploComponent {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
