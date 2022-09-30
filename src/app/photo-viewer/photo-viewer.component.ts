import {Component, OnInit} from '@angular/core';
import {Photo} from "../models/photo";
import {MatTableDataSource} from "@angular/material/table";
import {DataService} from "../services/data.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  public photos: Array<Photo> = [];
  public photosForView: Array<Photo> = [];

  dataSource: MatTableDataSource<Photo>;

  constructor(private service: DataService) {
    this.dataSource = new MatTableDataSource(this.photos);
  }

  ngOnInit() {
    this.service.getPhotos()
      .subscribe(response => {
        this.photos = response as Array<Photo>;
        this.photosForView = this.photos.slice(0, 9)
      });
  }

  onChangePage(pe: PageEvent) {
    this.photosForView = this.photos.slice(pe.pageIndex * pe.pageSize, pe.pageIndex * pe.pageSize + pe.pageSize)
  }
}



