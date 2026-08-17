import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://localhost:8080/hello'; // Spring Boot backend URL

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    return this.http.get(this.backendUrl, { responseType: 'text' });
  }
}
