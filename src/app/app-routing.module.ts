import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { BlocListComponent } from './bloc-list/bloc-list.component';
const routes: Routes = [ { path: 'add-bloc', component: AddBlocComponent },
  { path: 'bloc-list', component: BlocListComponent },
  { path: '', redirectTo: '/add-bloc', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
