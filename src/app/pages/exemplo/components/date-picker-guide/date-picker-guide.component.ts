import { Component } from '@angular/core';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';
import { DatePickerComponent } from '@leonardoferri/angular-design-system';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-picker-guide',
  standalone: true,
  imports: [DatePickerComponent, DsCodeBlockComponent, DatePipe],
  templateUrl: './date-picker-guide.component.html',
  styleUrl: './date-picker-guide.component.scss',
})
export class DatePickerGuideComponent {
  selectedDate: Date | null = null;

  onDateChange(date: Date) {
    console.log('Date selected:', date);
  }
}
