import { Component } from '@angular/core';

@Component({
  selector: 'app-outer-tabs',
  templateUrl: './outer-tabs.component.html',
  styleUrls: ['./outer-tabs.component.css']
})
export class OuterTabsComponent  {

  outtabs: string[] = ['Health & Benefits','Money Management','Life Events'];
  selectedwallet = this.outtabs[0];
  

}
