import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
})
export class SignupPage {

  signupForm: FormGroup;
  showPassword = false;
  isSubmitting = false;

  roles = [
    { value: 'student', label: 'Student', icon: 'school' },
    { value: 'teacher', label: 'Teacher', icon: 'people' },
    { value: 'admin', label: 'Administrator', icon: 'settings' }
  ];

  validationMessages: any = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'minlength', message: 'Name must be at least 2 characters long' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'pattern', message: 'Password must contain at least one letter and one number' }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ]],
      // role: ['student', Validators.required]
    });
  }

  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  getErrorMessage(control: string) {
    const formControl = this.signupForm.get(control);
    if (formControl && formControl.errors && (formControl.dirty || formControl.touched)) {
      const error = Object.keys(formControl.errors)[0];
      return this.validationMessages[control].find((msg: any) => msg.type === error)?.message;
    }
    return null;
  }

  async onSubmit() {
    if (this.signupForm.valid) {
      this.isSubmitting = true;
      try {
        console.log('Form submitted:', this.signupForm.value);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Handle success
      } catch (error) {
        console.error('Signup error:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      Object.keys(this.signupForm.controls).forEach(key => {
        const control = this.signupForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

}
