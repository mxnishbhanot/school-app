import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  user: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController

  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    // Typically, you'd fetch user data from a service
    // this.user = this.authService.getCurrentUser();
    this.user = {
      name: 'John Doe',
      email: 'r0a6f@example.com',
      role: 'Teacher',
      createdAt: new Date()
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Logout',
          handler: () => {
            this.authService.logout();
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  async editProfile() {
    const alert = await this.alertController.create({
      header: 'Edit Profile',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: this.user.name
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          value: this.user.email
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.updateProfile(data);
          }
        }
      ]
    });

    await alert.present();
  }

  private updateProfile(profileData: any) {
    // Implement profile update logic
    // this.authService.updateProfile(profileData).subscribe(
    //   (updatedUser) => {
    //     this.user = updatedUser;
    //     // Show success toast
    //   },
    //   (error) => {
    //     // Handle error
    //   }
    // );
  }

}
