import { StructuredText } from './structured-text';
import { WordLink } from './word-link';


export class AnalysisResult {
    baseText: StructuredText;
    importantWords: [String];
    helpfulLinks: [WordLink];
    imageLinks: [WordLink];
}
