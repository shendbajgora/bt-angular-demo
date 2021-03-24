import { Component, OnInit } from '@angular/core';
import {General} from '../shared/constants/general';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  generalInfo: {
    logo: string,
    title: string
  } = General;

  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
