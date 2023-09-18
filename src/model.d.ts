export class BoxModel {
	constructor (parent: HTMLElement);

	element: HTMLDivElement;

	get content () { return this.#boxes.content.dimensions; }
	set content (value) { this.#boxes.content.update(value); }

	get padding () { return this.#boxes.padding.dimensions; }
	set padding (value) { this.#boxes.padding.update(value); }

	get border () { return this.#boxes.border.dimensions; }
	set border (value) { this.#boxes.border.update(value); }

	get margin () { return this.#boxes.margin.dimensions; }
	set margin (value) { this.#boxes.margin.update(value); }

	get position () { return this.#boxes.position.dimensions; }
	set position (value) { this.#boxes.position.update(value); }

	get parent (): HTMLElement;
	set parent (value: HTMLElement);

	get showBorders (): boolean;
	set showBorders (value: boolean);

	get showDimensions (): boolean;
	set showDimensions (value: boolean);

	get showLabels (): boolean;
	set showLabels (value: boolean);

	get allowOverlap (): boolean;
	set allowOverlap (value: boolean);

	updateFromElement (element: HTMLElement): void;
}
