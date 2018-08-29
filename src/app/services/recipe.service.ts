import { Injectable } from '@angular/core';
import {Headers, Response, URLSearchParams} from '@angular/http';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  host: string;

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.host = window.location.origin + '/api'
    }
    else {
      this.host = 'http://localhost:8080/api'
    }
  }

  public getRandomRecipe(options: any): Observable<Object> {
    return this.http.get(this.host);      
  }
}
