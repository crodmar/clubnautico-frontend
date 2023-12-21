import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SociosComponent } from './socios/socios.component';
import { comprobarTokenGuard } from './comprobar-token.guard';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'socios', component: SociosComponent, canActivate: [comprobarTokenGuard] },
  { path: 'crear', component: CrearComponent, canActivate: [comprobarTokenGuard] },
  { path: 'editar/*', component: EditarComponent, canActivate: [comprobarTokenGuard] },//aqui falla algo
  { path: 'mostrar', component: SociosComponent, canActivate: [comprobarTokenGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
