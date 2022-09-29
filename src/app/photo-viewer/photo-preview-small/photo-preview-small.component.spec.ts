import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PhotoPreviewSmallComponent} from './photo-preview-small.component';

describe('PhotoPreviewSmallComponent', () => {
  let component: PhotoPreviewSmallComponent;
  let fixture: ComponentFixture<PhotoPreviewSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoPreviewSmallComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PhotoPreviewSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
