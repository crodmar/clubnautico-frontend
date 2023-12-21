import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { SocioService } from '../service/socio.service';
import { Socio } from '../models/socio.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  socio: Socio = {
    "dniSocio": '',
    "nombreSocio": '',
    "apellido1Socio": '',
    "apellido2Socio": '',
    "telefonoSocio": 0,
    "emailSocio": ''
  }

  constructor(private socioService: SocioService, private router: Router, private route: ActivatedRoute) {
    this.cargarSocio();
  }

  ngOnInit(): void {
  }

  cargarSocio() {//mal
    let idSocioString = this.route.snapshot.paramMap.get('idSocio');
    if (idSocioString) {
      let idSocio = parseInt(idSocioString);
      if (idSocio) {
        this.socioService.obtenerSocio(idSocio).subscribe((data: Socio) => {
          this.socio = data;
        });
      }
    }

  }

  editar(socio: Socio) {
    this.socioService.editarSocio(socio).subscribe(() => this.router.navigateByUrl("/socios"));
  }



  /*
    updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.url + "/" + user.id, user);
    }
 

  
  } */

}
