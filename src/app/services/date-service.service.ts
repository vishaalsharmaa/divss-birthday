import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private apiUrl: string = 'enter-your-api-url';
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  public API_URL = 'https://raw.githubusercontent.com/vishaalsharmaa/vishaalsharmaa/master/pre-birthday-message.json';

  // Handle Errors 
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private http: HttpClient) { }

  getFinalCountDownMessages()
  {
    return this.http.get(this.API_URL).pipe(catchError(this.error));
  }


  getIP()
  {
    var IP_FINDER = 'http://api.ipify.org/?format=json';
    return this.http.get(IP_FINDER);
  }

}
