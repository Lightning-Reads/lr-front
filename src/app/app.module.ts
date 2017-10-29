import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core'

import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud';

import { AppComponent } from './app.component'
import { StructuredTextInputComponent } from './structured-text-input/structured-text-input.component'
import { LoadAnimationComponent } from './load-animation/load-animation.component'
import { TextComponent } from './text/text.component'
import { AnalysisService } from './analysis.service';
import { WordCloudComponent } from './word-cloud/word-cloud.component'


@NgModule({
  declarations: [
    AppComponent,
    StructuredTextInputComponent,
    LoadAnimationComponent,
    TextComponent,
    WordCloudComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgWordCloudModule.forRoot()
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
