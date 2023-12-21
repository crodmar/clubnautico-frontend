import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private urlApi = 'http://localhost:9083/';

  constructor(private http: HttpClient) { }

// /crear
// /login
// /obtener/{id}
// /eliminar/{id}
// /actualizar/{id}

  public crearSocio(socio: Socio): Observable<Socio>{
    let token = localStorage.getItem("token");
    if (!token) {
      token = '';
    }
    return this.http.post<Socio>(this.urlApi + "crear", socio, {headers: { "Authorization": token}});
  }

  public obtenerSocio(id: number): Observable<Socio>{
    let token = localStorage.getItem("token");
    if (!token) {
      token = '';
    }
    return this.http.get<Socio>(this.urlApi + "obtener/" + id, {headers: { "Authorization": token}});
  }

  public verTodos(): Observable<Socio[]>{
    let token = localStorage.getItem("token");
    if (!token) {
      token = '';
    }
    return this.http.get<Socio[]>(this.urlApi + "obtener", {headers: { "Authorization": token}});
  }

  public eliminarSocio(id: number){
    let token = localStorage.getItem("token");
    if (!token) {
      token = '';
    }
    return this.http.delete<Socio>(this.urlApi + "eliminar/" + id, {headers: { "Authorization": token}});
  }

  public editarSocio(socio: Socio): Observable<Socio>{
    let token = localStorage.getItem("token");
    if (!token) {
      token = '';
    }
    console.log(socio)
    return this.http.put<Socio>(this.urlApi + "editar/" + socio.idSocio, socio, {headers: { "Authorization": token}});
  }
  /*
  update(): void {
    this.usersService.updateUser(this.user).subscribe(
      response => {
        this.router.navigate(['']);
      },
    );*/
  
}
