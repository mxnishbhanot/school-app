import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TabsComponent } from './shared/tabs/tabs.component';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TabsComponent],
})
export class AppComponent {
  loggedIn: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.checkLoggedIn()
  }


  checkLoggedIn(){
    this.loggedIn = this.authService.currentUser$ ? true : false
    if(this.loggedIn){
      this.router.navigate(['/announcements']);
    }
  }
}
