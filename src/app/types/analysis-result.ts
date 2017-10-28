import { StructuredText } from './structured-text';
import { WordLink } from './word-link';


export class AnalysisResult {
    baseText: StructuredText;
    importantWords: string[];
    helpfulLinks: WordLink[];
    imageLinks: WordLink[];
}
