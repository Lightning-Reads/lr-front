export class StructuredText {
    title: string;
    paragraphs: [string];

    constructor(title: string, paragraphs: [string]) {
        this.title = title;
        this.paragraphs = paragraphs;
    }
}
