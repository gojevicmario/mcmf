import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'app/core/page-title/page-title.service';

@Component({
  selector: 'app-sixty-sec-culture',
  templateUrl: './sixty-sec-culture.component.html',
  styleUrls: ['./sixty-sec-culture.component.css']
})
export class SixtySecCultureComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) {       this.pageTitleService.setTitle("60 seconds[] culture");
}

  ngOnInit(): void {
  }

}
