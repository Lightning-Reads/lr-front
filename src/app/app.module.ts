import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core'
import {HttpClientModule} from '@angular/common/http'

import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud'

import { AppComponent } from './app.component'
import { StructuredTextInputComponent } from './structured-text-input/structured-text-input.component'
import { LoadAnimationComponent } from './load-animation/load-animation.component'
import { TextComponent } from './text/text.component'
import { AnalysisService } from './analysis.service'
import { LinkListComponent } from './link-list/link-list.component'

import { WordCloudComponent } from './word-cloud/word-cloud.component'
import { PicturesComponent } from './pictures/pictures.component'
import { SummaryComponent } from './summary/summary.component'

@NgModule({
  declarations: [
    AppComponent,
    StructuredTextInputComponent,
    LoadAnimationComponent,
    TextComponent,
    LinkListComponent,
    WordCloudComponent,
    PicturesComponent,
    SummaryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgWordCloudModule.forRoot(),
    HttpClientModule,
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
