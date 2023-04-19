import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compagnes } from '../model/compagnes.model';

@Injectable({
  providedIn: 'root'
})
export class CampagnesService {
  private compagnesUrl = 'assets/payload-rmp.json';
  constructor(private http: HttpClient) { }

  getCampagnes(): Observable<any> {
    return this.http.get<Compagnes>(this.compagnesUrl);
  }
}
