import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IPhoto } from '../../../shared/models/photo';
import { PhotosService } from '../../../shared/services/photos/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnChanges {

  @Input() photo: IPhoto;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.photo && changes.photo.currentValue && changes.photo.isFirstChange()) {
    //   this.fetchPhoto();
    // }
  }

  private fetchPhoto(): void {
    this.photoService.request('get', this.photo.url).subscribe(response => {
      console.log(response);
    });
  }
}
