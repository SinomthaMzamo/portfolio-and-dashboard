import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://3ld0ahm8h1.execute-api.af-south-1.amazonaws.com/dev'; // 👈 replace with your API Gateway URL

  constructor(private http: HttpClient) {}

  async callApi(idToken: string) {
    const headers = new HttpHeaders({
      'Authorization': idToken,
      'Content-Type': 'application/json'
    });

    // Using firstValueFrom instead of deprecated toPromise
    const { firstValueFrom } = await import('rxjs');
    return firstValueFrom(this.http.get(`${this.apiUrl}/hello`, { headers }));
  }
}
