import { Component } from '@angular/core'
import { AnalysisService } from './analysis.service'
import { TextComponent } from './text/text.component'
import { AnalysisResult } from './types/analysis-result'
import { StructuredText } from './types/structured-text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lightning Reads';
  texts: AnalysisResult

  constructor(private analysisService: AnalysisService) {
  }

  ngOnInit(){
  	this.texts = this.analysisService.getData('', [''])
  }
}
