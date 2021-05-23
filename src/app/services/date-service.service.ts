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

  public PARENT_URL = 'https://raw.githubusercontent.com/vishaalsharmaa/vishaalsharmaa/master/';

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
    var FINAL_URL = this.PARENT_URL + 'pre-birthday-message.json';
    return this.http.get(this.API_URL).pipe(catchError(this.error));
  }

  getGenericMessage()
  {
    var GENERIC_MSG_URL = 'https://raw.githubusercontent.com/vishaalsharmaa/vishaalsharmaa/master/generic-message.json';
    return this.http.get(GENERIC_MSG_URL).pipe(catchError(this.error));
  }

  getBirthdayWishes()
  {
    var BIRTHDAY_WISHES ='https://raw.githubusercontent.com/vishaalsharmaa/vishaalsharmaa/master/wishes-by-friends.json';
    return this.http.get(BIRTHDAY_WISHES).pipe(catchError(this.error));
  }

  getGallary()
  {
    var GALLARY_API = 'https://raw.githubusercontent.com/vishaalsharmaa/vishaalsharmaa/master/gallary-content.json';
    return this.http.get(GALLARY_API).pipe(catchError(this.error));
  }


  getIP()
  {
    var IP_FINDER = 'http://api.ipify.org/?format=json';
    return this.http.get(IP_FINDER);
  }

}
