import { Routes } from '@angular/router';
import { ExemploComponent } from './pages/exemplo/exemplo.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => ExemploComponent,
  },
];
