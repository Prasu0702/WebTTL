import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketingComponent } from './marketing/marketing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { DataComponent } from './data/data.component';
import { PeopleComponent } from './people/people.component';
import { DrLiuComponent } from './dr-liu/dr-liu.component';
import { ITEComponent } from './ite/ite.component';
import { PublicationsComponent } from './publications/publications.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AlumniFooterComponent } from './alumni-footer/alumni-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MarketingComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    DataComponent,
    PeopleComponent,
    DrLiuComponent,
    PublicationsComponent,
    ITEComponent,
    AlumniFooterComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PopoverModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
