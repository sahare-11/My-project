import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-inner-tabs',
  templateUrl: './inner-tabs.component.html',
  styleUrls: ['./inner-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InnerTabsComponent  {

  tabs = ['Overview','Eat Well','Get Fit','Stay Well','Be Happy','Healthy Kids','Health Care 101'];
  selected = new FormControl(0);
}