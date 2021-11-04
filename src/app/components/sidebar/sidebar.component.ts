import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarActive = false;

  @Input() sidebarTitle: string = '';
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  changeSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
}
