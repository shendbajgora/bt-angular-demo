import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() btnChange = new EventEmitter<any>();


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
  }

  onClick(): void {
    const { url, absolutePath } = this.btn;
    if (!url) {
     // emit
     this.btnChange.emit();
    } else {
     // navigate to
     if (absolutePath) {
      this.router.navigateByUrl(url as string);
     } else {
      this.router.navigate(url as string[], { relativeTo: this.activatedRoute });
     }
    }
  }
}
