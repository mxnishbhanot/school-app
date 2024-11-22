export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'teacher' | 'student';
    profilePicture?: string;
  }
  
  export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
    type: 'text' | 'media';
    mediaUrl?: string;
  }
  
  export interface Announcement {
    id: string;
    title: string;
    description: string;
    createdBy: User;
    createdAt: Date;
  }
  
  export interface Event {
    id: string;
    title: string;
    description: string;
    date: Date;
    location: string;
    type: 'exam' | 'sports' | 'other';
  }
  