import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');
  protected readonly message = signal<string>('');

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getHelloMessage().subscribe({
      next: (data) => {
        this.message.set(data);
      },
      error: (error) => {
        console.error('Error fetching message:', error);
        this.message.set('Error fetching message from backend.');
      }
    });
  }
}

