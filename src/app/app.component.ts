import { Component, ViewChild } from '@angular/core'

import { AnalysisService } from './analysis.service'
import { AnalysisResult } from './types/analysis-result'
import { TextComponent } from './text/text.component'
import { StructuredText } from './types/structured-text'
import { StructuredTextInputComponent } from './structured-text-input/structured-text-input.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @ViewChild(StructuredTextInputComponent) input: StructuredTextInputComponent;

  result: AnalysisResult

  showInput = true
  showLoading = false
  showResult = false

  constructor(private analysisService: AnalysisService) {}

  sendText() {
      this.showInput = false
      this.showLoading = true

      this.analysisService.getData(this.input.getText())
        .subscribe(data => {
            this.result = data

            console.log(data)

            this.showLoading = false
            this.showResult = true
        }
        , err => {
          console.log(err);
          window.alert('Sorry, something went wrong.\n\nPlease try again later :/');
          this.reset();
        }
      );
  }

  reset() {
      this.showResult = false
      this.showInput = true
  }
}
