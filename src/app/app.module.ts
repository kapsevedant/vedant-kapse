import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import {FeatherIconModule} from "./feather-icon/feather-icon.module";
import {FormsModule} from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltip} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import { CopyrightModalComponent } from './shared-components/copyright-modal/copyright-modal.component';
import {MatButtonModule} from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    CopyrightModalComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatherIconModule,
    FormsModule,
    MatTabsModule,
    MatTooltip,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
