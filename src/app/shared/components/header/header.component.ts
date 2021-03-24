import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { General, Modules } from '../../constants/general';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isAccountModule: boolean;
  isLoggedIn: boolean;

  generalInfo: {
    title: string
  } = General;

  @Input() isOpen: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isAccountModule = this.router.url.indexOf(Modules.account) > -1;
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit(!this.isOpen);
  }

  login(): void {
    this.router.navigateByUrl(Modules.guest);
  }

  logout(): void {
    this.authService.logout();
  }
}
