import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { HomeDetailsPage } from '../pages/home/home-details';


import { TabsPage } from '../pages/tabs/tabs';
import { MyworldService } from './myworld.service';
import { UniquePipe } from './unique.pipe';

const routes: Route[] = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'contact',
        component: ContactPage,
      },
      {
        path: 'about',
        component: AboutPage,
      },
      {
        path: 'home-details/:student.cat_id',
        component: HomeDetailsPage,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      }
    ]
  },
];

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    HomeDetailsPage,
    TabsPage,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    { 
      provide: MyworldService,
      useClass: IonicErrorHandler }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
