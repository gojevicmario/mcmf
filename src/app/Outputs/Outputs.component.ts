

import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'Outputs',
  templateUrl: './Outputs.component.html',
})
export class OutputsComponent implements OnInit {

   /* Variables */
   services : any;
   about    : any;
   team     : any;
   contact  : any;

   constructor(private pageTitleService: PageTitleService, private service:ChkService) {

      /* Page title */
      this.pageTitleService.setTitle("Outputs");

      this.service.getServices().
         subscribe(response => {this.services = response},
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getAbout().
         subscribe(response => {this.about = response},
                   err      => console.log(err),
                   ()       => this.about
               );

      this.service.getTeam().
         subscribe(response => {this.team = response},
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response},
                   err      => console.log(err),
                   ()       => this.contact
               );

   }


   ngOnInit() {
   }
   
   /*
   * Social links
   */
  socialDetails : any = [
    { url: 'https://www.facebook.com/', icon : 'fa-facebook'},
    { url: '', icon : 'fa-twitter text-info'},
    { url: '', icon : 'fa-pinterest text-danger'},
  ]

  /*
   * Classes of social ul, li
   */
  socialsClasses : any = {ulClass:"", liClass:"", linkClass:""}

}
