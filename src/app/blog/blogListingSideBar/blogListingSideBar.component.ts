import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { ChkService } from '../../service/chk.service';

@Component({
  selector: 'angly-blogListingSideBar',
  templateUrl: './blogListingSideBar.component.html',
  styleUrls: ['./blogListingSideBar.component.scss'],
})
export class BlogListingSideBarComponent implements OnInit {

	/* Variables */
	blogSidebar      : any;
	categories       : any;
	popularPosts     : any;
	instagramGallary : any;

	constructor(private service:ChkService, private pageTitleService: PageTitleService,) {

		/* Page title */
		this.pageTitleService.setTitle(" News ");

		/* Page subTitle */
		this.pageTitleService.setSubTitle(" Latests news from MCMF ");

   }

   ngOnInit() {
   }

}
