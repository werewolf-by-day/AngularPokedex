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
// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
	{ path: 'gen1', component: KantoComponent },
	{ path: 'gen2', component: JohtoComponent },
	{ path: 'gen3', component: HoennComponent },
	{ path: 'gen4', component: SinnohComponent },
	{ path: 'gen5', component: UnovaComponent },
	{ path: 'gen6', component: KalosComponent },
	{ path: 'dex', component: DexEntryComponent },
	{ path: 'evolutions', component: EvolutionsComponent },

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const routing = RouterModule.forRoot(APP_ROUTES);