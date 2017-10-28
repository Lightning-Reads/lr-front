import { Component } from '@angular/core'
import { AnalysisService } from './analysis.service'
import { TextComponent } from './text/text.component'
import { AnalysisResult } from './types/analysis-result'
import { StructuredText } from './types/structured-text'

import { AnalysisService } from './analysis.service'
import { AnalysisResult } from './types/analysis-result'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lightning Reads'

  result: AnalysisResult

  showInput = true
  showLoading = false
  showResult = false

  constructor(private analysisService: AnalysisService) {}

  sendText() {
      this.showInput = false
      this.showLoading = true

      this.analysisService.getData('', ['']).subscribe(data => {
          this.result = data

          this.showLoading = false
          this.showResult = true
      });
  }

  reset() {
      this.showResult = false
      this.showInput = true
  }
  texts: AnalysisResult

  constructor(private analysisService: AnalysisService) {
  }

  ngOnInit(){
  	this.texts = this.analysisService.getData('', [''])
  }
}
