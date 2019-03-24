import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/authGuard.service';

// Routes of the pages used in this app
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'CV', loadChildren: './cv/cv.module#CVPageModule' },
  { path: 'Projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'Extracurriculum', loadChildren: './extracurriculum/extracurriculum.module#ExtracurriculumPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
