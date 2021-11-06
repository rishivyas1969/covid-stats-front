import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GetIndiaService } from 'src/app/services/get-india.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(private dataService: GetIndiaService) { }

  async ngOnInit() {
    (await this.dataService.getData())
    .subscribe( result  => {
      this.data = result;
      console.log(this.data);
    })    
  }

}
