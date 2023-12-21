import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SociosComponent } from './socios/socios.component';
import { comprobarTokenGuard } from './comprobar-token.guard';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'socios', component: SociosComponent, canActivate: [comprobarTokenGuard] },
  { path: 'crear', component: CrearComponent, canActivate: [comprobarTokenGuard] },
  { path: 'editar/:idSocio', component: EditarComponent, canActivate: [comprobarTokenGuard] },//aqui falla algo 
  { path: 'detalle/:idSocio', component: DetalleComponent, canActivate: [comprobarTokenGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
