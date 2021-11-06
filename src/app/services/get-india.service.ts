import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetIndiaService {
  
  
  constructor(private http: HttpClient) {}

  async getData() {
    return this.http.get('/api/india',
      { responseType: 'json'});
  }
}

