import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check local storage for existing token
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  login(email: string, password: string): Observable<any> {
    // Implement actual API call here
    return new Observable(subscriber => {
      // Dummy implementation
      const dummyUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'student'
      };
      localStorage.setItem('currentUser', JSON.stringify(dummyUser));
      this.currentUserSubject.next(dummyUser);
      subscriber.next({ token: 'dummy-jwt-token', user: dummyUser });
      subscriber.complete();
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  register(userData: Partial<User>): Observable<any> {
    // Implement actual API call here
    return new Observable(subscriber => {
      const dummyUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name!,
        email: userData.email!,
        role: userData.role!
      };
      subscriber.next({ user: dummyUser });
      subscriber.complete();
    });
  }
}