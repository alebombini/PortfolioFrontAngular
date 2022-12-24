import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { LoginComponent } from "./Componentes/login/login.component";
import { CardLinksComponent } from './Componentes/card-links/card-links.component';
import { PersonalComponent } from './Componentes/personal/personal.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { LaboralComponent } from './Componentes/laboral/laboral.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PortofolioService } from './Servicios/portofolio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './Componentes/banner/editar/editar.component';
import { ModalSkillsComponent } from './Componentes/skills/modal-skills/modal-skills.component';
import { ModalFotosComponent } from './Componentes/card-links/modal-fotos/modal-fotos.component';
import { ModalEstudiosComponent } from './Componentes/estudios/modal-estudios/modal-estudios.component';
import { ModalExperienciaComponent } from './Componentes/laboral/modal-experiencia/modal-experiencia.component';
import { ModalProyectosComponent } from './Componentes/proyectos/modal-proyectos/modal-proyectos.component';
import { EditarSobreMiComponent } from './Componentes/personal/editar-sobre-mi/editar-sobre-mi.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PersonaService } from './Servicios/persona.service';
import { InterceptorService } from './Servicios/interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        BannerComponent,
        CardLinksComponent,
        PersonalComponent,
        EstudiosComponent,
        LaboralComponent,
        SkillsComponent,
        ProyectosComponent,
        FooterComponent,
        EditarComponent,
        ModalSkillsComponent,
        ModalFotosComponent,
        ModalEstudiosComponent,
        ModalExperienciaComponent,
        ModalProyectosComponent,
        EditarSobreMiComponent,
        InicioComponent,
    ],
    providers: [PersonaService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        
    ]
})
export class AppModule { }
