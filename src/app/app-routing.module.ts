import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},

  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
