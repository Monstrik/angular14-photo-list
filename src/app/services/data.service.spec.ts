import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {DataService} from './data.service';
import {Photo} from "../models/photo";

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPhotos', () => {
    expect(service.getPhotos).toBeTruthy();
  });

  it('be able to retrieve photos from the API via GET', () => {
    const dummyPhotos: Photo[] = [{
      id: '1',
      url: 'http://',
      thumbnailUrl: 'http://',
      title: 'test'
    }, {
      id: '2',
      url: 'http://',
      thumbnailUrl: 'http://',
      title: 'test2'
    }];
    service.getPhotos().subscribe(photos => {
      expect(photos.length).toBe(2);
      expect(photos).toEqual(dummyPhotos);
    });
    const request = httpMock.expectOne(`https://jsonplaceholder.typicode.com/photos`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyPhotos);
  });
});
