import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor() { }

  titleComponent:any = 'Administration Component'
  
  ngOnInit(): void {
  }

}
