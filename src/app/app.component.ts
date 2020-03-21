import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid19';
  search:string="";
  constructor(private route:Router)
  {}
  ngOnInit() {
  }

  getCountry()
  {
    console.log(this.search);
    this.route.navigate(['/searchcountry',this.search]);
    
  }

}
