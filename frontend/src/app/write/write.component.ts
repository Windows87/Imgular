import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent {
  writeObject = {image: null, title: '' };
  srcImage = '';
  error = '';
  uploading = false;

  constructor(private imageService: ImageService, private router: Router) { }

  onSubmit(event) {
  	event.preventDefault();

  	if(this.uploading)
  	  return;

  	if(!this.writeObject.image)
  	  return this.error = 'Missing Image';

  	if(!this.writeObject.title)
  	  return this.error = 'Missing Title';

    this.uploading = true;

  	this.imageService.writeImage(this.writeObject).subscribe(res => {
  	  this.router.navigateByUrl('/');
    }, error => {
      this.uploading = false;
      this.error = error.error.error;
    });
  }

  openFileInput(fileInput) {
  	fileInput.click();
  }

  onFileChange(event) {
  	const file = event.target.files[0];
    const reader = new FileReader();

  	if(!file) {
  	  this.writeObject.image = null;
  	  return this.srcImage = '';
  	}

  	this.writeObject.image = file;

  	reader.onload = (e) => {
  	  this.srcImage = reader.result;
  	};

  	reader.readAsDataURL(file);
  }
}
