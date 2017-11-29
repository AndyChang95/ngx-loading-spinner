/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ngx-loading-spinner';

@Component({
  selector: 'app',
  template: `<ngx-loading-spinner></ngx-loading-spinner>`
})
class AppComponent {

  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000);
  }

}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, Ng4LoadingSpinnerModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
