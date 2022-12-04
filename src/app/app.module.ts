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
import { HttpClientModule } from '@angular/common/http';

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
      
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        
    ]
})
export class AppModule { }
