import { Component } from '@angular/core';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [DsCodeBlockComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
})
export class GettingStartedComponent {}
