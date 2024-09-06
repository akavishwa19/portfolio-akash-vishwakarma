import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{ path: '', component: PagesComponent , children:[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
