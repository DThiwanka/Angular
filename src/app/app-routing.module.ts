import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AnothercompComponent } from './anothercomp/anothercomp.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { MatcompComponent } from './matcomp/matcomp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [

  { path: '', component: ContentComponent },
  { path: 'profile', component: AnothercompComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'material', component: MatcompComponent },
   { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

