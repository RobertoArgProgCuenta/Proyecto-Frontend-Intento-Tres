import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SideLinkComponent } from './components/side-link/side-link.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes =
[
   
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ContentContainerComponent,
    SideLinkComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
