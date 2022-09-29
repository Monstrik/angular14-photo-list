import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PhotoViewerComponent} from './photo-viewer.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataService} from "../services/data.service";

describe('PhotoViewerComponent', () => {
  let component: PhotoViewerComponent;
  let fixture: ComponentFixture<PhotoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [PhotoViewerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
