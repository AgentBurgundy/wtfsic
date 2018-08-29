import { Injectable } from '@angular/core';
import {Headers, Response, URLSearchParams} from '@angular/http';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

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
    let recipe: Observable<Object>;
    
    this.http.get<Auth>(this.host).subscribe(data => {
      recipe = this.http.get('https://api.edamam.com/search', {
        params: {
          "app_id": data.id,
          "app_key": data.key,
          "q": "chicken"
        }
      }).pipe(map((res: Response) => {
        return {
          title: res.json()["hits"][0]["recipe"]["label"]
        }
      }));
    });

    return recipe;
  }
}
