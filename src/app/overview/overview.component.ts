import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../service/hero-service.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit{
  
  constructor(
    private heroService :HeroServiceService
  ){}
    
  fruits = this.heroService.fruits

  ngOnInit(): void {
   
  }

}
