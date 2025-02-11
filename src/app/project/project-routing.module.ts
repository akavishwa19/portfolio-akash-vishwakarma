import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { XityComponent } from './xity/xity.component';
import { AayraComponent } from './aayra/aayra.component';
import { BankComponent } from './bank/bank.component';
import { DanalaxmiComponent } from './danalaxmi/danalaxmi.component';
import { DocComponent } from './doc/doc.component';
import { IicccComponent } from './iiccc/iiccc.component';
import { InshltComponent } from './inshlt/inshlt.component';
import { JudeComponent } from './jude/jude.component';
import { KanappaComponent } from './kanappa/kanappa.component';
import { MaasComponent } from './maas/maas.component';
import { OitetraComponent } from './oitetra/oitetra.component';
import { RmpublicComponent } from './rmpublic/rmpublic.component';
import { SaimandirComponent } from './saimandir/saimandir.component';
import { ShammahComponent } from './shammah/shammah.component';
import { VeevComponent } from './veev/veev.component';
import { XarkComponent } from './xark/xark.component';
import { ZestComponent } from './zest/zest.component';
import { SdCoveringComponent } from './sd-covering/sd-covering.component';
import { KannadamuhurthumComponent } from './kannadamuhurthum/kannadamuhurthum.component';
import { YmcaIndiaComponent } from './ymca-india/ymca-india.component';
import { AquaticAnglesComponent } from './aquatic-angles/aquatic-angles.component';
import { MiniEcommerceComponent } from './mini-ecommerce/mini-ecommerce.component';
import { A2aComponent } from './a2a/a2a.component';

const routes: Routes = [{ path: '', component: ProjectComponent , children:[
  {
    path:'',
    redirectTo:'xity',
    pathMatch:'full'
  },
  {
    path:'xity',
    component:XityComponent
  },
  {
    path:'aayra',
    component:AayraComponent
  },
  {
    path:'bank-management',
    component:BankComponent
  },
  {
    path:'danalaxmi',
    component:DanalaxmiComponent
  },
  {
    path:'doc-management',
    component:DocComponent
  },
  {
    path:'iiccc',
    component:IicccComponent
  },
  {
    path:'inshlt',
    component:InshltComponent
  },
  {
    path:'jude-billing',
    component:JudeComponent
  },
  {
    path:'kanappa',
    component:KanappaComponent
  },
  {
    path:'maas-global',
    component:MaasComponent
  },
  {
    path:'oitetra',
    component:OitetraComponent
  },
  {
    path:'rm-public',
    component:RmpublicComponent
  },
  {
    path:'sai-mandir-charlotte',
    component:SaimandirComponent
  },
  {
    path:'shammah',
    component:ShammahComponent
  },
  {
    path:'veev-bags',
    component:VeevComponent
  },
  {
    path:'xark',
    component:XarkComponent
  },
  {
    path:'zest-nutrition',
    component:ZestComponent
  },
  {
    path:'sd-covering',
    component:SdCoveringComponent
  },
  {
    path:'kannada-muhurtham',
    component:KannadamuhurthumComponent
  },
  {
    path:'ymca',
    component:YmcaIndiaComponent
  },
  {
    path:'aquatic',
    component:AquaticAnglesComponent
  },
  {
    path:'mini-ecommerce',
    component:MiniEcommerceComponent
  },
  {
    path:'a-2-a',
    component:A2aComponent
  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
