import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from "ng2/app/ng2-demo.component";
import { HomeComponent } from './home-component';
 
declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  
  shouldProcessUrl(url) {
    return url.toString().startsWith("/home")
     || url.toString().startsWith("/formdetails")
     || url.toString() == ""
   }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

angular.module('detailsApp')
  .directive(
    'ng2Demo',
    downgradeComponent({component: Ng2DemoComponent}),
    'home',
    downgradeComponent({component: HomeComponent})
  );
  
 
@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'formdetails',
        component: Ng2DemoComponent
      }
    ],
    {
      useHash: true,
      enableTracing: true
    }
    )
  ],
 
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

 