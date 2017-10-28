import { Injectable } from '@angular/core'

import { Observable } from 'rxjs/Observable'
import "rxjs/add/observable/of"

import { AnalysisResult } from './types/analysis-result'
import { StructuredText } from './types/structured-text'
import { WordLink } from './types/word-link'


@Injectable()
export class AnalysisService {

    constructor() {}

    getData(title: string, paragraphs: [string]): Observable<AnalysisResult> {
        const res = new AnalysisResult();
        res.baseText = new StructuredText(
            'Campus Hackathon Darmstadt 27.-29.10.2017',
            [
                'Sowohl Artificial Intelligence als auch Open Source Software sind zwei riesige Trends, die Entwicklungsprozesse von heute radikal verändern werden. Beim Campus Hackathon entstehen Tools, die beides miteinander vereinen.',
                'Beim Campus Hackathon hast Du 24 Stunden Zeit um eine Idee unter Zeitdruck in Code umzusetzen. Ein Team besteht idealerweise aus Konzeptern, Programmierern und Webdesignern. Unterstützung bei der Ideenfindung und der Umsetzung erhältst Du von erfahrenen Mentoren unserer Partnerunternehmen.'
            ]
        );
        res.importantWords = [
            'Campus',
            'Hackathon',
            'Artificial',
            'Intelligence',
            'Open',
            'Source',
        ]
        res.helpfulLinks = [
            new WordLink('Hackathon', 'https://www.campus-hackathon.de/darmstadt-2017/' ),
            new WordLink('Open', 'https://github.com/Lightning-Reads'),
        ]
        res.imageLinks = [
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
        ]

        return Observable.of(res)
    }
}
