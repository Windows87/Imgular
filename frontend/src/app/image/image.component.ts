import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  url = 'http://localhost:3001/images/800/';
  imageData = {};

  constructor(private route: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
      const id = params.id;
      this.getImage(id);
    });
  }

  getImage(id) {
    this.imageService.getImage(id).subscribe(data => {
      this.imageData = data.image;
    });
  }
}
