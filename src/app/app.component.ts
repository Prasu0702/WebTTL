import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TTL';
  

  constructor(public router: Router) {}  // Make router public so it's accessible in the template

  isFooterVisible(): boolean {
    // Define routes where the footer should be hidden
    const hiddenFooterRoutes = ['/people/masters', '/people/undergrad','/people/dr-liu', '/people/ph-d', '/people/alumni' ];
    return !hiddenFooterRoutes.includes(this.router.url);
  }
}

