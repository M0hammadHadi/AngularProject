import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  data = [
    {value: 22 , label: '#of users'},
    {value: 48 , label: '#Comment'},
    {value: 10 , label: '#Like'}
  ]
  item = [
  {
    image: '/assets/Images/111.jfif',
    title:'Mountains',
    description : 'this is a snowy mountains pic'
  },
  {
    image: '/assets/Images/211.jfif',
    title:'Flowers',
    description : 'this is a Flower pic'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
