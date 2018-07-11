import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from '../app.component';
import { FormComponent } from '../form/form.component';
import { ContactComponent } from '../contact/contact.component';

// Components Paths
const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'form', component: FormComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
