import { Component } from '@angular/core';
import { SidenavComponent } from '@leonardoferri/angular-design-system';
import { DsCodeBlockComponent } from '../dc-code-block/dc-code-block.component';

@Component({
  selector: 'app-sidenav-guide',
  standalone: true,
  imports: [SidenavComponent, DsCodeBlockComponent],
  templateUrl: './sidenav-guide.component.html',
  styleUrl: './sidenav-guide.component.scss',
})
export class SidenavGuideComponent {
  isOpened = false;

  handleClose(event: Event) {
    console.log('Sidenav closed:', event);
  }
}
