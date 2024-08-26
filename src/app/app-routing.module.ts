import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { DataComponent } from './data/data.component';
import { PeopleComponent } from './people/people.component';
import { DrLiuComponent } from './dr-liu/dr-liu.component';
import { MastersComponent } from './masters/masters.component';
import { PhDComponent } from './ph-d/ph-d.component';
import { AlumniComponent } from './alumni/alumni.component';
import { UndergradComponent } from './undergrad/undergrad.component';
import {ITEComponent} from './ite/ite.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'data', component: DataComponent },
  { path: 'ite', component: ITEComponent },
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: 'dr-liu', component: DrLiuComponent },
      { path: 'masters', component: MastersComponent },
      { path: 'phd', component: PhDComponent },
      { path: 'alumni', component: AlumniComponent },
      { path: 'undergrad', component: UndergradComponent },
    ],
  },
  { path: 'publications/:student', component: PublicationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
