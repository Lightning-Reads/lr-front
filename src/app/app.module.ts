import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StructuredTextInputComponent } from './structured-text-input/structured-text-input.component'
import { LoadAnimationComponent } from './load-animation/load-animation.component'
import { TextComponent } from './text/text.component'
import { AnalysisService } from './analysis.service';
import { LinkListComponent } from './link-list/link-list.component'


@NgModule({
  declarations: [
    AppComponent,
    StructuredTextInputComponent,
    LoadAnimationComponent,
    TextComponent,
    LinkListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AnalysisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
