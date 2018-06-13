import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BirdComponent } from './birds/bird/bird.component';
import { HumanComponent } from './human/human/human.component';
import { ReptileComponent } from './reptiles/reptile/reptile.component';
import { SpeciesComponent } from './species/species/species.component';
import { SubbirdComponent } from './birds/bird/subbird/subbird.component';
import { RouterModule, Routes } from '@angular/router';
import { SubreptileComponent } from './reptiles/reptile/subreptile/subreptile.component';
import { SubspeciesComponent } from './species/species/subspecies/subspecies.component';
import { HomeComponent } from './Home/home/home.component';
import { AppRoutingModule } from './/app-routing.module';

import {SubhumanComponent} from './human/human/subhuman/subhuman.component'
import { HttpClientModule,HttpClient } from '@angular/common/http';
const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: 'subbird', component: SubbirdComponent ,pathMatch: 'full'},
  { path: 'subreptiles', component: SubreptileComponent },
  { path: 'subspecies', component: SubspeciesComponent },
  { path: 'subhuman', component: SubhumanComponent }
];





@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    HumanComponent,
    ReptileComponent,
    SpeciesComponent,
    SubbirdComponent,
    SubreptileComponent,
    SubspeciesComponent,
    HomeComponent,
    SubhumanComponent
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    AppRoutingModule,
    [ RouterModule.forRoot(routes,{useHash: true}) ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
