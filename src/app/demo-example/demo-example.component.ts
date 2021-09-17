import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-demo-example',
  templateUrl: './demo-example.component.html',
  styleUrls: ['./demo-example.component.css']
})
export class DemoExampleComponent {

  tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  selected = new FormControl(0);
  tabtitle:string = '';
  }


