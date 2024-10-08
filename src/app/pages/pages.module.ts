import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { SharedModule } from '../shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'primeng/tooltip';
import { NgxTypedWriterModule } from 'ngx-typed-writer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbTooltipModule,
    TooltipModule,
    NgxTypedWriterModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    HttpClientModule
  ]
})
export class PagesModule { }
