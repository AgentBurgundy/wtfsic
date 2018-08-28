import { Injectable } from '@angular/core';
import {Headers, Response, URLSearchParams} from '@angular/http';

import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiData: any;

  constructor(private http: HttpClient) {
    this.http.get(window.location.origin + '/api')
    .pipe(
      map((res: Response) => res.json()))
      .subscribe(data => {
        this.apiData = data;
    })
  }

  public getRandomRecipe(options: any) {
    return this.apiData;
  }
}
