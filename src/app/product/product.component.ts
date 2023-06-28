import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../service/hero-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroServiceService
    ) { }


  fruitId: any;
  fruit: any;
  fruits = this.heroService.fruits

  ngOnInit(): void {
    this.fruitId = this.activatedRoute.snapshot.paramMap.get('id');
    this.fruit = this.fruits.find(x => x.id == this.fruitId);
  }
}
  



