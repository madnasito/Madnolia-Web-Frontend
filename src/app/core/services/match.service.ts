import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }

  getMatchById() {
    console.log(environment.apiUrl);
      // return this.http.get(environment.apiUrl)
  }
}
