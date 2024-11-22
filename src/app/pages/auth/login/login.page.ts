import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoadingController, ToastController } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, IonicModule, RouterLink]
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) {}

  async onSubmit() {
    if (!this.email || !this.password) {
      await this.showToast('Please fill in all fields');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();

    try {
      // Your authentication logic here
      console.log('Login attempt:', this.email, this.password);
      localStorage.setItem('currentUser', JSON.stringify({email: this.email, password: this.password}));
      await this.showToast('Successfully logged in', 'success');
      this.router.navigate(['/announcements']);
    } catch (error) {
      await this.showToast('Invalid credentials', 'danger');
    } finally {
      await loading.dismiss();
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  private async showToast(message: string, color: string = 'dark') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }

}
