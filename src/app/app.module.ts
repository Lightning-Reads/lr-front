import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StructuredTextInputComponent } from './structured-text-input/structured-text-input.component'
import { LoadAnimationComponent } from './load-animation/load-animation.component'
import { TextComponent } from './text/text.component';
import { WordLinkHoverComponent } from './wordlinkhover/wordlinkhover.component'
import { AnalysisService } from './analysis.service';

import { AnalysisService } from './analysis.service'


@NgModule({
  declarations: [
    AppComponent,
    StructuredTextInputComponent,
    LoadAnimationComponent
    TextComponent,
    WordLinkHoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
