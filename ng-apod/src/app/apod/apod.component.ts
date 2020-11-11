import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodService } from '../api/apod.service';
import { Apod } from '../models/apod';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod:Apod;

  constructor(
    private apodService: ApodService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.getApod(params['date']);
    });
  }

  getApod(date:string): void{

    this.apodService.getApod(date).subscribe(
      (response:any)=>{
        this.apod = response;
        console.log(response);
      }
    );

  }

}
