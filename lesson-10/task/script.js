class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	elemNew() {

		let container = document.querySelector('.container'),
				div = document.createElement('div');

		container.appendChild(div);
		div.innerHTML = prompt('Что запишем в div?', '')
		div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
	}
}

let option = new options('400px', '400px', 'blue', '32px', 'center');
option.elemNew();

