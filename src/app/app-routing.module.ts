import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { 
    path: 'about', 
    component: AboutComponent,
    children:[{path: 'edit', component:EditAboutComponent}]
  },
  {path: 'offers',
    loadChildren: ()=>{
      return import('./offers/offers.module').then((m) => m.OffersModule);
    }
  },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
