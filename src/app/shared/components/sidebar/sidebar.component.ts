import { Component, OnInit } from '@angular/core';
import { General } from '../../constants/general';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  generalInfo: {
    logo: string,
    title: string
  } = General;

  constructor() { }

  ngOnInit(): void {
  }

}
