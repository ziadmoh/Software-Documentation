import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isCollapsed = true; // using angular powered bootstrap to allow the dropdown of the navebar in the small sreen 
  ngOnInit(): void {
  }

}
