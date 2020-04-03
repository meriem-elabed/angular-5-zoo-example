import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DragonComponent } from './dragon/dragon.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
      path: 'dragon',
      component: DragonComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
