import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: 'bars', component: BarsComponent },
      { path: 'double-bars', component: DoubleBarsComponent },
      { path: 'donuts', component: DonutsComponent },
      { path: 'donuts-http', component: DonutsHttpComponent },
      { path: '**', redirectTo: 'bars' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
