import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { WriteComponent } from './write/write.component';
import { routing } from './app.routing';
import { ImageService } from './image.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LittleImageComponent } from './images/little-image/little-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageComponent,
    WriteComponent,
    TopMenuComponent,
    LittleImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
