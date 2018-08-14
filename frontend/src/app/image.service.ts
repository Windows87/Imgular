import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = 'http://localhost:3001/api/';

  constructor(private http: HttpClient) { }

  getImages(initial, finish) {
  	return this.http.get<any[]>(this.apiUrl + 'images/' + initial + '/' + finish);
  }

  getImage(id) {
  	return this.http.get<any>(this.apiUrl + 'image/' + id);
  }

  writeImage(imageData) {
  	const formData = new FormData();
  	formData.append('image', imageData.image);
  	formData.append('title', imageData.title);
  	return this.http.post<any>(this.apiUrl + 'write/', formData);
  }
}
