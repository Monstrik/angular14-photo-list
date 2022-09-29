import {Component, Input} from '@angular/core';
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-photo-preview-small',
  templateUrl: './photo-preview-small.component.html',
  styleUrls: ['./photo-preview-small.component.scss']
})
export class PhotoPreviewSmallComponent {

  @Input() photo: Photo = {
    id: '0',
    title: 'Title',
    url: 'images/placeholder.jpg',
    thumbnailUrl: 'images/placeholder.jpg'
  };
}
