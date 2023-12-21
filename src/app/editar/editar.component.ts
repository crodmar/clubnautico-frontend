import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { SocioService } from '../service/socio.service';
import { Socio } from '../models/socio.model';

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
    "telefonoSocio":  0,
    "emailSocio": ''
  }
  
  constructor(private socioService: SocioService, private router: Router) {}

  ngOnInit(): void {
  }

  editar() {//peta
    this.socioService.editarSocio(this.socio).subscribe(() => this.router.navigateByUrl("/socios"));
  }


}
