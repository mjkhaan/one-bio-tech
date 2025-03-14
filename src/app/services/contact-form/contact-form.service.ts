import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private apiUrl: string = 'https://octdailyapi.octdaily.com/appollo/api/ContactRequest';
 
  constructor(private http: HttpClient) {}
 
  sendContactDetails(payload: any): Observable<any> {
    console.log(payload);
    // Send payload directly if no modification is needed
    return this.http.post<any>(this.apiUrl, payload).pipe(
      catchError(this.handleError)  // Add error handling
    );
  }
 
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error; // You can throw an error or return a fallback value
  }
}
 
