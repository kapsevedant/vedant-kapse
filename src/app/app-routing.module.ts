import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {EducationComponent} from "./pages/education/education.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'education',
    component:EducationComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
