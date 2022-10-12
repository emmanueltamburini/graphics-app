import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutsComponent,
    DonutsHttpComponent,
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
