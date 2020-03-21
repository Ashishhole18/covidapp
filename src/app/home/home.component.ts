import { Component, OnInit } from '@angular/core';
import { AllcasesService } from '../allcases.service';
import { All } from './all';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { count } from 'rxjs/operators';
import { CoronsNews } from './coronanews';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 alls:All;
 dated:any;
 
 count1:any;
 count:any=0;
 news:any;
 actnews:CoronsNews[];
  constructor(private serv:AllcasesService) {
    this.alls=new All(0,0,0,0);
    
    
   }

  ngOnInit() {

    this.count=sessionStorage.getItem('count');
    
    if(this.count==0)
    {
      console.log(this.count);
      this.count++;
    sessionStorage.setItem('count',this.count);
    
    console.log(this.count);
    }
    else{
      console.log(this.count);
      this.count=sessionStorage.getItem('count');
      this.count++;
    sessionStorage.setItem('count',this.count);
    this.count1=sessionStorage.getItem('count');
    console.log(this.count1);

    }
    
    this.serv.getAllCases().subscribe(
      prdo=>{
        this.alls= prdo;
        console.log(this.alls);
        console.log(this.alls.updated);
        this.dated=new Date(this.alls.updated);
        sessionStorage.setItem('dated',this.dated);
      }
    )
    console.log(this.dated);
    this.serv.getCoronaNews().subscribe(
      data=>{
        this.news= data;
        this.actnews=this.news['articles'];
        console.log(this.news);
        console.log(this.actnews);
      }
    )
  }

}
