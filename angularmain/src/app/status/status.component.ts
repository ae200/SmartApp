import { Component, OnInit } from '@angular/core';

import { StatusAPIService } from '../status/status.service';

import { Status } from './status';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
	results:Status[] = []

  constructor(private statusAPI: StatusAPIService) { }

  ngOnInit(): void {
  	this.statusAPI.list().subscribe(data=>{
  		// console.log(data.count)
  		this.results = data.results //as [Status]
  	})
  }
}
