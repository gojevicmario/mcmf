import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { PageTitleService } from 'app/core/page-title/page-title.service';

@Component({
  selector: 'app-gallery-custom',
  templateUrl: './gallery-custom.component.html',
  styleUrls: ['./gallery-custom.component.css']
})
export class GalleryCustomComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  museumImages: NgxGalleryImage[] = [];

  constructor(private pageTitleService: PageTitleService, ) {
    this.pageTitleService.setTitle("Gallery");
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 2,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageInfinityMove: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewAnimation: false,
        previewCloseOnClick: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
      ];
      

      for (let i = 1; i <= 10; i++) {
       this.museumImages.push({
        small: `../../assets/img/mcmf/gallery/museum/image${i}.jpg`,
            medium: `../../assets/img/mcmf/gallery/museum/image${i}.jpg`,
            big: `../../assets/img/mcmf/gallery/museum/image${i}.jpg`,
       })
        
      }
  }

}
