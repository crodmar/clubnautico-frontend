import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { SocioService } from '../service/socio.service';
import { Socio } from '../models/socio.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  socios: Socio[] = [];
  socio: Socio = {
    "dniSocio": '',
    "nombreSocio": '',
    "apellido1Socio": '',
    "apellido2Socio": '',
    "telefonoSocio":  0,
    "emailSocio": ''
  }

  constructor(private socioService: SocioService, private router: Router, private route: ActivatedRoute) {
    this.cargarSocio();
  }

  ngOnInit(): void {
    //this.mostrar();
  }

  cargarSocio() {
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

  //No va
  /*mostrar(id?: number){
    if (id) {
      this.socioService.obtenerSocio(id).subscribe((data) => this.socio = data);
    }
  }*/

  /*
  seeDetails(){
    this.router.navigate(['detail']);
  }*/


  /*
  fillData(){
    this.apiService.getData().subscribe(
      data => {
      this.data = data.results;
      console.log(this.data);
    })
  }*/

}
