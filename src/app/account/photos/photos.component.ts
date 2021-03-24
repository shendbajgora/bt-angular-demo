import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosService } from '../../shared/services/photos/photos.service';
import { IPhoto } from '../../shared/models/photo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  photos: IPhoto[] = [];

  subscription: Subscription = new Subscription();

  constructor(private photosService: PhotosService) { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchPhotos(): void {
    this.subscription = this.photosService.readAll().subscribe(response => {
      this.photos = response;
    });
  }
}
