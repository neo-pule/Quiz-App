import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component : HomePage , children : [{ path: 'cat1', loadChildren: './page/cat1/cat1.module#Cat1PageModule' },
  { path: 'cat2', loadChildren: './page/cat2/cat2.module#Cat2PageModule' },
  { path: 'cat3', loadChildren: './page/cat3/cat3.module#Cat3PageModule' },
  { path: '', loadChildren: './page/menu/menu.module#MenuPageModule' },
  { path: 'result', loadChildren: './page/result/result.module#ResultPageModule' }
   ]},
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
