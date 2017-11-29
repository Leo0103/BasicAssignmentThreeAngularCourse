import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailButtonComponent } from './detail-button/detail-button.component';
import { ParagraphDisplayComponent } from './paragraph-display/paragraph-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailButtonComponent,
    ParagraphDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
