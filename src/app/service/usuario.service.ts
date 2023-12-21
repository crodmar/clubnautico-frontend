import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    private urlApi = 'http://localhost:9083/login';

    constructor(private http: HttpClient) { }

    login(email: String, contrasena: String): Observable<Usuario>{
        return this.http.post<Usuario>(this.urlApi, {"email": email, "contrasena": contrasena});
    }

}