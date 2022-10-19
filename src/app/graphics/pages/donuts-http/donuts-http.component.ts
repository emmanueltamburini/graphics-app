import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donuts-http',
  templateUrl: './donuts-http.component.html',
  styleUrls: ['./donuts-http.component.css']
})
export class DonutsHttpComponent implements OnInit {

  constructor(private  graphicsService: GraphicsService) { }

  ngOnInit(): void {
    this.graphicsService.getDataDonutsData()
      .subscribe(({labels, values}) => {

        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push(
          {
            data: values,
            backgroundColor: ['#9673FF', '#686BE8', '#7FA3FF', '#68AEE8', '#73E4FF']
          }
        );
      });
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    aspectRatio: 2
  };

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
