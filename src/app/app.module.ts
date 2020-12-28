import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SdlcComponent } from './sdlc/sdlc.component';
import { InitPhaseComponent } from './init-phase/init-phase.component';
import { ReqPhaseComponent } from './req-phase/req-phase.component';
import { DesignPhaseComponent } from './design-phase/design-phase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllFilesComponent } from './all-files/all-files.component';
import { PlaceholderDirective } from './placeholder.directive';
import { ViewPhaseComponent } from './view-phase/view-phase.component';
import { ViewFileComponent } from './view-file/view-file.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SdlcComponent,
    InitPhaseComponent,
    ReqPhaseComponent,
    DesignPhaseComponent,
    AllFilesComponent,
    PlaceholderDirective,
    ViewPhaseComponent,
    ViewFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
