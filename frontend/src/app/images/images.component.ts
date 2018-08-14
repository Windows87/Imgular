import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images = [];
  initial = 0;
  finish = 10;
  imagesPerScroll = 10;
  finishedImages = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  	this.getImages();
  }

  scrollNotExist() {
    const imagesGrid = document.querySelector('.imagesGrid');
    return !(imagesGrid.clientHeight > imagesGrid.scrollHeight);
  }

  scrollReachedEnd(element) {
  	return parseInt(element.clientHeight + element.scrollTop) === element.scrollHeight;
  }

  onScroll(element) {
  	if(this.scrollReachedEnd(element)) {
  	  this.getImages();
    }
  }

  getImages() {
  	if(this.finishedImages)
  	  return;

    this.imageService.getImages(this.initial, this.finish).subscribe(newImages => {
      this.images = this.images.concat(newImages);

      this.initial += this.imagesPerScroll;
      this.finish += this. imagesPerScroll;

      if(newImages.length < this.imagesPerScroll)
        return this.finishedImages = true;

      if(this.scrollNotExist())
        this.getImages();
    });
  }
}
