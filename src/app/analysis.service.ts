import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

import { AnalysisResult } from './types/analysis-result';
import { StructuredText } from './types/structured-text';
import { RatedWord } from './types/rated-word';
import { WordLink } from './types/word-link';


@Injectable()
export class AnalysisService {

    constructor(private http: HttpClient) {}

    getData(paragraphs: string): Observable<AnalysisResult> {
        return this.http.post<AnalysisResult>('http://192.168.179.30:5000/input', { 'content' : paragraphs });
    }
}
