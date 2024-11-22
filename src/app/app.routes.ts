import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'announcements',
    loadComponent: () => import('./shared/tabs/tabs.component').then((m) => m.TabsComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'chat-list',
    loadComponent: () => import('./pages/chat-list/chat-list.page').then( m => m.ChatListPage)
  },
  {
    path: 'event-list',
    loadComponent: () => import('./pages/event-list/event-list.page').then( m => m.EventListPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/auth/profile/profile.page').then( m => m.ProfilePage)
  },
];
