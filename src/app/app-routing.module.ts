import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MessiPageComponent } from './messi/messi-page/messi-page.component';
import { CristianoPageComponent } from './cristiano/cristiano-page/cristiano-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'Home', component:HomePageComponent},
  {path:'Messi', component: MessiPageComponent},
  {path:'Cristiano', component: CristianoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
