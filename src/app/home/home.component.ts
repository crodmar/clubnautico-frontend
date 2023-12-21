import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  email: string = '';
  contrasena: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    
  }

  login(): void {
    this.usuarioService.login(this.email, this.contrasena).subscribe(usuario => {
      localStorage.setItem("token", usuario.token)
      this.router.navigateByUrl("/socios")
    })
  }
/*
  fillData(){
    this.apiService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results;
        console.log(this.characters);
      }
    )
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
