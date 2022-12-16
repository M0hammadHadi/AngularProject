import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionhome',
  templateUrl: './collectionhome.component.html',
  styleUrls: ['./collectionhome.component.css']
})
export class CollectionhomeComponent implements OnInit {
  pathCompanies ='companies';
  data = [
    {name: 'ali' , age: '24' , job: 'designer' , employed: true},
    {name: 'reza' , age: '29' , job: 'engeenier' , employed: true},
    {name: 'rezvaneh' , age: '24' , job: 'accountant' , employed: false},
  ]
  header = [
    {key: 'name' , value:'Name', show: true},
    {key: 'age' , value:'Age'  , show:true},
    {key: 'job' , value:'Job'  ,show:true},
    {key: 'employed' , value:'Employe'  ,show:false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
