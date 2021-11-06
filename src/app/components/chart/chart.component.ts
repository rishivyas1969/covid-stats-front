import { Component, OnInit } from '@angular/core';
import { GetIndiaService } from 'src/app/services/get-india.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: any;
  chartData: any[] = [];
  chartLables: any[] = [];
  constructor(private dataService: GetIndiaService) { }

  async ngOnInit() {
    (await this.dataService.getData())
    .subscribe( result  => {
      this.data = result;
      console.log(this.data);
      for( let x=0 ; x<this.data.length ; ++x){
        if(this.data[x].month.localeCompare("")){
          
          this.chartData.push({"name": this.data[x].date.slice(0,10), "value": this.data[x].cases});
        }
      }
      this.chartLables = [{"name":"India", "series": this.chartData}];

      console.log(this.chartLables);
    })
  }


}
