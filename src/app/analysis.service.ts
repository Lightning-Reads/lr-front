import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

import { AnalysisResult } from './types/analysis-result';
import { StructuredText } from './types/structured-text';
import { RatedWord } from './types/rated-word';
import { WordLink } from './types/word-link';


@Injectable()
export class AnalysisService {

    constructor() {}

    getData(title: string, paragraphs: string[]): Observable<AnalysisResult> {
        const res = new AnalysisResult();
        res.baseText = new StructuredText(
            'Campus Hackathon Darmstadt 27.-29.10.2017',
            [
                'Sowohl Artificial Intelligence als auch Open Source Software sind zwei riesige Trends, die Entwicklungsprozesse von heute radikal verändern werden. Beim Campus Hackathon entstehen Tools, die beides miteinander vereinen.',
                'Beim Campus Hackathon hast Du 24 Stunden Zeit um eine Idee unter Zeitdruck in Code umzusetzen. Ein Team besteht idealerweise aus Konzeptern, Programmierern und Webdesignern. Unterstützung bei der Ideenfindung und der Umsetzung erhältst Du von erfahrenen Mentoren unserer Partnerunternehmen.'
            ]
        );
        res.importantWords = [
            new RatedWord('Campus', 0.9),
            new RatedWord('Hackathon', 0.95),
            new RatedWord('Artificial', 0.8),
            new RatedWord('Intelligence', 0.7),
            new RatedWord('Open', 0.8),
            new RatedWord('Source', 0.81),
        ];
        res.helpfulLinks = [
            new WordLink('Hackathon', 'https://www.campus-hackathon.de/darmstadt-2017/' ),
            new WordLink('Open', 'https://github.com/Lightning-Reads'),
        ];
        res.imageLinks = [
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Campus', 'http://vorhang-auf.com/wp-content/uploads/2016/10/Bild-Coolworking.jpg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Source', 'http://heise.cloudimg.io/width/700/q75.webp-lossy-75.foil1/_www-heise-de_/foto/imgs/13/2/1/4/7/4/6/8/bilder-der-woche-8-schwarzer-kater_16-9-d9944b7218d8b7a9.jpeg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
            new WordLink('Intelligence', 'http://bloggermymaze.files.wordpress.com/2009/09/klassisch_quadratisch_mittig_600.jpg'),
        ]

        return Observable.of(res);
    }
}
