import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private url: string = 'https://api.openweathermap.org/data/2.5/';
  private key: string = '10585438c026cecbe30341569f611d4c';

  constructor( private http: HttpClient) { }

  getClima(ciudad: string):Observable<any>{

    return this.http.get(`${this.url}weather?q=${ciudad}&appid=${this.key}`)
  }

}
