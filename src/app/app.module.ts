import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { WordLinkHoverComponent } from './wordlinkhover/wordlinkhover.component'
import { AnalysisService } from './analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    WordLinkHoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
