import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {PhotoViewerComponent} from './photo-viewer/photo-viewer.component';
import {PhotoPreviewSmallComponent} from './photo-viewer/photo-preview-small/photo-preview-small.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoViewerComponent,
    PhotoPreviewSmallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
