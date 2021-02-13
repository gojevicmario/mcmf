import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'app/core/page-title/page-title.service';

@Component({
  selector: 'app-leaflet-post',
  templateUrl: './leaflet-post.component.html',
  styleUrls: ['./leaflet-post.component.scss']
})
export class LeafletPostComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService, private window: Window) { 
          /* Page title */
          this.pageTitleService.setTitle("My Culture Heritage & My Future Brochure");

          /* Page subTitle */
          this.pageTitleService.setSubTitle(" Available in 6 languages ");
  }

  ngOnInit() {
  }

}
