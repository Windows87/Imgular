import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './image/image.component';
import { WriteComponent } from './write/write.component';

const APP_ROUTES: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: 'write', component: WriteComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);