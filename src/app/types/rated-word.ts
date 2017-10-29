export class RatedWord {
    word: string;
    /**
    * Rating, 0 <= n <= 1
    */
    importance: number;

    constructor(word: string, importance: number) {
        this.word = word;
        this.importance = importance;
    }
}
