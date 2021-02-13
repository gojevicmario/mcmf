import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'app/core/page-title/page-title.service';

@Component({
  selector: 'app-first-transnational-meeting-post',
  templateUrl: './first-transnational-meeting-post.component.html',
  styleUrls: ['./first-transnational-meeting-post.component.css']
})
export class FirstTransnationalMeetingPostComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) { 
    /* Page title */
              this.pageTitleService.setTitle("First transnational meeting - Larissa");
  }

  ngOnInit() {
  }

}
