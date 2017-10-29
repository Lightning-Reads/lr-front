import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-structured-text-input',
    templateUrl: './structured-text-input.component.html',
    styleUrls: ['./structured-text-input.component.css']
})
export class StructuredTextInputComponent implements OnInit {
    wholeText = '';

    constructor() { }

    ngOnInit() {
    }

    getText():string {
        return this.wholeText;
    }

    clearText() {
        this.wholeText = '';
    }
}
