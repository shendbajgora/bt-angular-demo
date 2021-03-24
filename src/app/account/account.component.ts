import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modules } from '../shared/constants/general';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  openSidebar = true;
  isAccountModule: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAccountModule = this.router.url.indexOf(Modules.account) > -1;
    this.initSidebar();
  }

  private initSidebar(): void {
    if (localStorage.getItem('isSidebarOpen')) {
      this.openSidebar = localStorage.getItem('isSidebarOpen') === 'true';
    } else {
      localStorage.setItem('isSidebarOpen', JSON.stringify(this.openSidebar));
    }
  }

  toggleSidebar(toggleSidebar: boolean): void {
    this.openSidebar = toggleSidebar;
    localStorage.setItem('isSidebarOpen', JSON.stringify(toggleSidebar));
  }

}
