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

    showCloud = true;
    showList = false;

    wordData: Array<AgWordCloudData> = new Array(0);

    options = {
        settings: {
            minFontSize: 25,
            maxFontSize: 50,
        },
        margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        labels: false
    };

    colors: string[] = ['#f7dc71', '#E8CF03', '#FFCD10', '#e8aa03', '#f2c93d', '#d9ef22', '#e9e049'];

  constructor() { }

  ngOnInit() {
      for (let i = 0; i < this.importedWords.length; i++) {
          let el = this.importedWords[i];
          this.wordData.push(
              {size: el.importance, text: el.word}
          );
      }
  }

  switchToCloud() {
    this.showCloud = true;
    this.showList = false;
  }

  switchToList() {
    this.showList = true;
    this.showCloud = false;
  }

  getRndColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
