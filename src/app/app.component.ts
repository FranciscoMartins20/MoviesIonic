import { Component, ViewChild } from '@angular/core';
import { Platform, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private location: Location
  ) {
    this.backButtonEvent();
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet.canGoBack()) {
        this.location.back();
      } else {
        this.backButtonAlert();
      }
    });
  }
  async backButtonAlert() {
    const alert = await this.alertController.create({
      message: 'you just pressed the back button',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'close app',
          handler: () => {
            navigator['app'].exitApp();
          },
        },
      ],
    });
    await alert.present();
  }
}
