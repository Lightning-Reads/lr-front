import { Component, Input, OnInit } from '@angular/core';
import { WordLink } from './../types/word-link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  @Input() links: WordLink[]

  constructor() { }

  ngOnInit() {
  }

}
