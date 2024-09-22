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
    SaimandirComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule
]
})
export class ProjectModule { }
