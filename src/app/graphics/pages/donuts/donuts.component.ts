import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [ 350, 450, 100 ],
        backgroundColor: ['#7245ED', '#4848F7', '#4C73E0']
      }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    aspectRatio: 2,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
