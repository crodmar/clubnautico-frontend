import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { SocioService } from '../service/socio.service';
import { Socio } from '../models/socio.model';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.css'
})
export class SociosComponent implements OnInit {

  socios: Socio[] = [];

  constructor(private socioService: SocioService, private router: Router) {}

  ngOnInit(): void {
    this.fillData();
  }


  fillData() {
    this.socioService.verTodos().subscribe((data) => this.socios = data);
  }

  eliminar(id?: number) {
    if (id) {
      this.socioService.eliminarSocio(id).subscribe(() => this.fillData());
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
