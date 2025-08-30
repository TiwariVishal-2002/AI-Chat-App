import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
        
      <router-outlet></router-outlet>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('client');

  constructor(private router: Router) { }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
