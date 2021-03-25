import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheckedComponent } from './checked/checked.component';
import { TrashComponent } from './trash/trash.component';
import { CandidateInfoComponent } from './candidate-info/candidate-info.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'checked', component: CheckedComponent},
  {path: 'trash', component: TrashComponent},
  {path: 'candidate-info', component: CandidateInfoComponent},
  // {path: '**', component: PageNotFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
