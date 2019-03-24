import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Member routes for the pages
const routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "../home/home.module#HomePageModule"
  },
  {
    path: "contact",
    loadChildren: '../contact/contact.module#ContactPageModule'
  },
  {
    path: "cv",
    loadChildren: '../cv/cv.module#CVPageModule'
  },
  {
    path: "extracurriculum",
    loadChildren: '../extracurriculum/extracurriculum.module#ExtracurriculumPageModule'
  },
  {
    path: "projects",
    loadChildren: '../projects/projects.module#ProjectsPageModule'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class MemberRoutingModule {}
