import { Component } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Component';

  constructor(private router: Router){}

  redirect(pagename: string) {
    this.router.navigateByUrl('/'+pagename);
  }

}
