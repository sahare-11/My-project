import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-inner-tabs',
  templateUrl: './inner-tabs.component.html',
  styleUrls: ['./inner-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InnerTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}