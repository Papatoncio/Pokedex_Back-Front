import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  usuario: usuario[];

  constructor(private http: HttpClient) { }

  private UrlUsr = "http://localhost:3000/api/usuarios"

  getUsuario(): Observable<any> {
    return this.http.get(`${this.UrlUsr}`);
  }

  createUsuario(usuario: usuario): Observable<usuario[]> {
    return this.http.post<usuario[]>(this.UrlUsr, usuario);
  }
}
