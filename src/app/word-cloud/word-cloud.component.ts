import { Component, OnInit, Input } from '@angular/core';

import {AgWordCloudModule, AgWordCloudData} from 'angular4-word-cloud';

import { RatedWord } from '../types/rated-word';


@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {
    @Input() importedWords: RatedWord[];

    wordData: Array<AgWordCloudData> = new Array(0);

    options = {
        settings: {
            minFontSize: 10,
            maxFontSize: 100,
        },
        margin: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
        },
        labels: true // false to hide hover labels
    };

    colors: string[] = ['#FFFD04', '#E8CF03', '#FFCD10', '#E8A103', '#FF9804'];

  constructor() { }

  ngOnInit() {
      for (let i = 0; i < this.importedWords.length; i++) {
          let el = this.importedWords[i];
          this.wordData.push(
              {size: el.importance * 100, text: el.word}
          );
      }
  }

}
