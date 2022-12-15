import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EditAcercadeComponent } from './componentes/acercade/edit-acercade.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'newskill', component: NewSkillComponent},
    {path: 'editskill/:id', component: EditSkillComponent},
    {path: 'editacercade/:id', component: EditAcercadeComponent},
    {path: 'nuevoproyecto', component: NewProyectoComponent},
    {path: 'editproyecto/:id', component: EditProyectoComponent}
    
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
