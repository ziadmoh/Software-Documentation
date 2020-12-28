import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFilesComponent } from './all-files/all-files.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'files',component:AllFilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
