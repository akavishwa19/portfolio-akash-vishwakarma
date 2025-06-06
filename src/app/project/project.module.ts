import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { XityComponent } from './xity/xity.component';
import { SharedModule } from "../shared/shared.module";
import { AayraComponent } from './aayra/aayra.component';
import { DanalaxmiComponent } from './danalaxmi/danalaxmi.component';
import { VeevComponent } from './veev/veev.component';
import { ZestComponent } from './zest/zest.component';
import { XarkComponent } from './xark/xark.component';
import { ShammahComponent } from './shammah/shammah.component';
import { RmpublicComponent } from './rmpublic/rmpublic.component';
import { OitetraComponent } from './oitetra/oitetra.component';
import { JudeComponent } from './jude/jude.component';
import { MaasComponent } from './maas/maas.component';
import { KanappaComponent } from './kanappa/kanappa.component';
import { InshltComponent } from './inshlt/inshlt.component';
import { IicccComponent } from './iiccc/iiccc.component';
import { DocComponent } from './doc/doc.component';
import { BankComponent } from './bank/bank.component';
import { SaimandirComponent } from './saimandir/saimandir.component';
import { SdCoveringComponent } from './sd-covering/sd-covering.component';
import { A2aComponent } from './a2a/a2a.component';
import { KannadamuhurthumComponent } from './kannadamuhurthum/kannadamuhurthum.component';
import { MiniEcommerceComponent } from './mini-ecommerce/mini-ecommerce.component';
import { YmcaIndiaComponent } from './ymca-india/ymca-india.component';
import { AquaticAnglesComponent } from './aquatic-angles/aquatic-angles.component';
import { VidburnComponent } from './vidburn/vidburn.component';


@NgModule({
  declarations: [
    ProjectComponent,
    XityComponent,
    AayraComponent,
    DanalaxmiComponent,
    VeevComponent,
    ZestComponent,
    XarkComponent,
    ShammahComponent,
    RmpublicComponent,
    OitetraComponent,
    JudeComponent,
    MaasComponent,
    KanappaComponent,
    InshltComponent,
    IicccComponent,
    DocComponent,
    BankComponent,
    SaimandirComponent,
    SdCoveringComponent,
    A2aComponent,
    KannadamuhurthumComponent,
    MiniEcommerceComponent,
    YmcaIndiaComponent,
    AquaticAnglesComponent,
    VidburnComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
]
})
export class ProjectModule { }
