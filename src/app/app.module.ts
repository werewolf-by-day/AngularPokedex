import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiserviceService } from './apiservice.service';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { KantoComponent } from './kanto/kanto.component';
import { JohtoComponent } from './johto/johto.component';
import { HoennComponent } from './hoenn/hoenn.component';
import { SinnohComponent } from './sinnoh/sinnoh.component';
import { UnovaComponent } from './unova/unova.component';
import { KalosComponent } from './kalos/kalos.component';
import { AllmonsComponent } from './allmons/allmons.component';
import { DexEntryComponent } from './dex-entry/dex-entry.component';
import { EvolutionsComponent } from './evolutions/evolutions.component';

@NgModule({
  declarations: [
    AppComponent,
    KantoComponent,
    JohtoComponent,
    HoennComponent,
    SinnohComponent,
    UnovaComponent,
    KalosComponent,
    AllmonsComponent,
    DexEntryComponent,
    EvolutionsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
