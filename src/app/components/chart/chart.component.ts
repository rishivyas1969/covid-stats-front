import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { GetIndiaService } from 'src/app/services/get-india.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  flag = false;
  data: any;
  chartData: any[] = [['Dates', 'Cases']];
  chartLables: any[] = [['Dates', 'Cases']];
  lineChart: GoogleChartInterface = {
    chartType: "LineChart",
    dataTable: this.chartData
  };
  // public lineChart: GoogleChartInterface = {
  //   chartType: 'LineChart',
  //   firstRowIsData: true,
  // dataTable: this.chartData,
  // options: {'title': 'India Covid Data',
  //   height: 700}
  // }
  chartComponent = this.lineChart.component;

  constructor(private dataService: GetIndiaService) { }

  async ngOnInit() {
    (await this.dataService.getData()).subscribe( result  => {
      this.data = result;
      console.log(this.data);
      // this.chartData.push(['Dates', 'Cases']);
      for( let x=0 ; x<this.data.length ; ++x){
        if(this.data[x].month.localeCompare("")){
          
          this.chartData.push([String(this.data[x].month)+ ' ' + this.data[x].date.slice(0,4), this.data[x].cases]);
        }
      }
      this.chartLables = [{"name":"India", "series": this.chartData}];
      this.lineChart = {
        chartType: 'LineChart',
      dataTable: this.chartData,
      options: { height: 700}
      }
      this.flag = true;
      this.chartComponent?.draw();
      console.log(this.chartData);
    })
  }


}
