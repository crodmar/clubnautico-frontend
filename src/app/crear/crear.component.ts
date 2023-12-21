import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { SocioService } from '../service/socio.service';
import { Socio } from '../models/socio.model';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {

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

  crear() {
    this.socioService.crearSocio(this.socio).subscribe(() => this.router.navigateByUrl("/socios"));
  }


}
