import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompagneDetailsComponent } from './components/compagne-details/compagne-details.component';
import { ListOfCampagnesComponent } from './components/list-of-campagnes/list-of-campagnes.component';

const routes: Routes = [
  { path: '', component: ListOfCampagnesComponent },
  { path: 'home', component: ListOfCampagnesComponent },
  { path: 'compagne/:id', component: CompagneDetailsComponent },
  { path: '**', component: ListOfCampagnesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
