import { BoxModel } from './box.js';

export class BoxModelOverlay {
	#element;
	#model;
	#enabled = true;

	constructor (element) {
		this.#element = element;
		this.#model = new BoxModel(document.body);
		this.#model.allowOverlap = true;
		this.#model.showBorders = false;
		this.#model.showDimensions = false;
		this.#model.showLabels = false;
		this.#model.element.style.position = 'fixed';
		this.#model.element.style.pointerEvents = 'none';
		this.show();
	}

	get enabled () { return this.#enabled; }
	set enabled (value) {
		const previousState = this.#enabled;
		this.#enabled = value;
		if (this.#enabled && !previousState) this.render();
	}

	hide () {
		this.#enabled = false;
	}

	show () {
		this.#enabled = true;
		this.render();
	}

	update () {
		const rectangle = this.#element.getBoundingClientRect();
		this.#model.updateFromElement(this.#element);
		this.#model.element.style.top = `${rectangle.top - this.#model.margin[0] - this.#model.border[0]}px`;
		this.#model.element.style.left = `${rectangle.left - this.#model.margin[3] - this.#model.border[3]}px`;
	}

	render () {
		if (!this.#enabled) {
			this.#model.element.style.opacity = '0';
			return;
		}
		this.#model.element.style.opacity = '0.5';
		this.update();
		window.requestAnimationFrame(this.render.bind(this));
	}
}
