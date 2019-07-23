import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



tel = 0;

showSpiner = false;

loadData() {
  this.showSpiner = true;
  setTimeout(()=>{
    this.showSpiner = false;
  } ,5000)
}





  constructor() { }

  ngOnInit() {
  }

}
