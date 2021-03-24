import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-headline',
  templateUrl: './page-headline.component.html',
  styleUrls: ['./page-headline.component.scss']
})
export class PageHeadlineComponent implements OnInit {

  @Input() title: string;
  @Input() btn: {
    label: string,
    url: string | string[],
    absolutePath: boolean;
  };


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(): void {
   const { url, absolutePath } = this.btn;

   if (absolutePath) {
     this.router.navigateByUrl(url as string);
   } else {
     this.router.navigate(url as string[], { relativeTo: this.activatedRoute });
   }
  }
}
