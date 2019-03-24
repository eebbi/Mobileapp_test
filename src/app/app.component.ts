import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

// Sidebar menu information for the pages
export class AppComponent {
  public appPages = [
    {
      title: 'Home / About',
      url: '/members/home',
      icon: 'home'
    },
    {
      title: 'Contact',
      url: '/members/contact',
      icon: 'ios-at'
    },
    {
      title: 'CV',
      url: '/members/cv',
      icon: 'ios-archive'
    },
    {
      title: 'Extra Curriculum activities',
      url: '/members/extracurriculum',
      icon: 'md-aperture'
    },
    {
      title: 'Projects',
      url: '/members/projects',
      icon: 'ios-code-working'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
