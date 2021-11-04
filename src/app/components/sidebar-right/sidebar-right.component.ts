import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  sidebarActive = false;

  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
