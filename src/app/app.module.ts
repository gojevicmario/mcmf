import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DirectivesModule } from './core/directive/directives.module';
import { AgmCoreModule } from '@agm/core';


/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
/* Service */
import { ChkService } from './service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { GdprComponent } from './GDPR/GDPR.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';
import { SixtySecCultureComponent } from './sixty-sec-culture/sixty-sec-culture.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { GalleryCustomComponent } from './gallery-custom/gallery-custom.component';

@NgModule({
   declarations: [	
      AppComponent,
      MainComponent,
      HomeComponent,
      PricingComponent,
      ContactComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      FeaturesComponent,
      AboutComponent,
      SearchComponent,
      SupportComponent,
      Footer2Component,
      sidebarWidgetsComponent,
      GdprComponent,
      SixtySecCultureComponent,
      GalleryCustomComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      WidgetsModule,
      MenuToggleModule,
      DirectivesModule,
      SlickCarouselModule,
      NgxGalleryModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
      })
   ],
   providers: [
      MenuItems,
      PageTitleService,
      ChkService,
      { provide: Window, useValue: window },
      {provide: LocationStrategy, useClass: HashLocationStrategy}
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
