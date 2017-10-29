import { StructuredText } from './structured-text';
import { WordLink } from './word-link';

import { RatedWord } from './rated-word';


export class AnalysisResult {
    baseText: StructuredText;
    importantWords: RatedWord[];
    helpfulLinks: WordLink[];
    imageLinks: WordLink[];
}
