import { Box, ContentBox } from './box.js';
import { boxStyles } from './config.js';
import { parseValue } from './utilities.js';

export class BoxModel {
	element;
	#boxes = {
		content: new ContentBox('Content'),
		padding: new Box('Padding', 'padding'),
		border: new Box('Border', 'border'),
		margin: new Box('Margin', 'margin'),
		position: new Box('Position', 'position')
	};
	#parent;
	#showDimensions = true;
	#showLabels = true;
	#spacing = {
		default: 14,
		value: 14
	}

	constructor (parent) {
		this.parent = parent;
	}

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

	get parent () { return this.#parent; }
	set parent (value) {
		this.#parent = value;
		// Create the root element.
		this.element?.remove();
		this.element = document.createElement('div');
		this.element.className = 'boxModelDisplay';
		Object.assign(this.element.style, boxStyles);
		// Assemble the boxes.
		this.#parent.append(this.element);
		this.element.append(this.#boxes.position.element);
		this.#boxes.position.element.append(this.#boxes.margin.element);
		this.#boxes.margin.element.append(this.#boxes.border.element);
		this.#boxes.border.element.append(this.#boxes.padding.element);
		this.#boxes.padding.element.append(this.#boxes.content.element);
	}

	get allowOverlap () { return !Boolean(this.#spacing.value); }
	set allowOverlap (value) {
		if (this.allowOverlap === value) return;
		console.log('model');
		this.#spacing.value = value ? 0 : this.#spacing.default;
		for (const box of Object.values(this.#boxes)) {
			box.spacing = this.#spacing.value;
			box.update(box.dimensions, true);
		}
	}

	get showBorders () { return this.#boxes.content.showBorders; }
	set showBorders (value) {
		if (this.showBorders === value) return;
		this.#boxes.content.showBorders = value;
		this.#boxes.padding.showBorders = value;
		this.#boxes.border.showBorders = value;
		this.#boxes.margin.showBorders = value;
		this.#boxes.position.showBorders = value;
	}

	get showDimensions () { return this.#showDimensions; }
	set showDimensions (value) {
		if (this.#showDimensions === value) return;
		this.#showDimensions = value;
		const opacity = value ? '1' : '0';
		this.#boxes.content.labels[0].style.opacity = opacity;
		this.#boxes.content.labels[1].style.opacity = opacity;
		for (let i = 0; i < 4; i++) {
			this.#boxes.padding.labels[i].style.opacity = opacity;
			this.#boxes.border.labels[i].style.opacity = opacity;
			this.#boxes.margin.labels[i].style.opacity = opacity;
			this.#boxes.position.labels[i].style.opacity = opacity;
		}
	}

	get showLabels () { return this.#showLabels; }
	set showLabels (value) {
		if (this.#showLabels === value) return;
		this.#showLabels = value;
		const opacity = value ? '1' : '0';
		this.#boxes.content.labels[this.#boxes.content.labels.length - 1].style.opacity = opacity;
		this.#boxes.padding.labels[this.#boxes.padding.labels.length - 1].style.opacity = opacity;
		this.#boxes.border.labels[this.#boxes.border.labels.length - 1].style.opacity = opacity;
		this.#boxes.margin.labels[this.#boxes.margin.labels.length - 1].style.opacity = opacity;
		this.#boxes.position.labels[this.#boxes.position.labels.length - 1].style.opacity = opacity;
	}

	updateFromElement (element) {
		const styles = window.getComputedStyle(element);
		this.content = [parseValue(styles.width), parseValue(styles.height)];
		this.padding = [parseValue(styles.paddingTop), parseValue(styles.paddingRight), parseValue(styles.paddingBottom), parseValue(styles.paddingLeft)];
		this.border = [parseValue(styles.borderTopWidth), parseValue(styles.borderRightWidth), parseValue(styles.borderBottomWidth), parseValue(styles.borderLeftWidth)];
		this.margin = [parseValue(styles.marginTop), parseValue(styles.marginRight), parseValue(styles.marginBottom), parseValue(styles.marginLeft)];
		this.position = [parseValue(styles.top), parseValue(styles.right), parseValue(styles.bottom), parseValue(styles.left)];
	}
}
