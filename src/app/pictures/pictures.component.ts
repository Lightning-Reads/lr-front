import { Component, Input } from '@angular/core';
import { WordLink } from './../types/word-link';

@Component({
  selector: 'pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent{
	@Input() pictureLinks: WordLink[]
	directPictureLinksLine1 = []
	directPictureLinksLine2 = []
	directPictureLinksLine3 = []
	modalActive = false
	imageLink = ""
	imageName = ""

	ngOnInit() {
		let amount = this.pictureLinks.length
		let rest = amount % 3
		let additional = 0
		if(rest < 3 && rest > 0){
			additional = 1
		}
		for(var i = 0; i < ((amount - rest) / 3) + additional; i++){
			this.directPictureLinksLine1.push({url: this.pictureLinks[i].url, word: this.pictureLinks[i].word})
		}
		if(rest == 2){
			additional = 2
		}
		else {
			additional = 0
		}
		for(i; i < (((amount - rest) / 3) * 2) + additional; i++){
			this.directPictureLinksLine2.push({url: this.pictureLinks[i].url, word: this.pictureLinks[i].word})
		}
		for(i; i < amount; i++){
			this.directPictureLinksLine3.push({url: this.pictureLinks[i].url, word: this.pictureLinks[i].word})
		}
	}

	showModal(link){
		this.imageName = link.word
		this.imageLink = link.url
		this.modalActive = true
		console.log("kek")
	}

	closeModal(){
		this.modalActive = false
	}
}
