import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetIndiaService {
  // getDataUrl = 'http://localhost3000/india';
  
  
  constructor(private http: HttpClient) {}

  async getData() {
    return this.http.get('/api/india',
      { responseType: 'json'});
  }
}

