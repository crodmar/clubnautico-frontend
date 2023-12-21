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

  constructor(private socioService: SocioService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mostrar();
  }


  fillData() {
    this.socioService.verTodos().subscribe((data) => this.socios = data);
  }

  eliminar(id?: number) {
    if (id) {
      this.socioService.eliminarSocio(id).subscribe(() => this.fillData());
    }
  }

  //No va
  mostrar(id?: number){
    if (id) {
      this.socioService.obtenerSocio(id).subscribe((data) => this.socio = data);
    }
  }

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
