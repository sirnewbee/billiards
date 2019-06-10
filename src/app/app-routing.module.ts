import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SelectGameComponent} from './select-game/select-game.component';

const routes: Routes = [
  {path: '', component: SelectGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
