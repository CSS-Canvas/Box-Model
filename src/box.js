import { boxStyles, colors } from './config.js';
import { arraysMatch, isZero } from './utilities.js';

function createBoxLabel (name) {
	const span = document.createElement('span');
	span.style.position = 'absolute';
	span.style.bottom = '0.15em';
	span.style.left = '0.8ch';
	span.style.pointerEvents = 'none';
	span.innerText = name;
	return span;
}

function createDimensionLabel (index) {
	const span = document.createElement('span');
	span.style.position = 'absolute';
	span.style.zIndex = '1';
	span.style[['top', 'right', 'bottom', 'left'][index]] = '0';
	if (index % 2 === 1) {
		span.style.textOrientation = 'mixed';
		span.style.writingMode = 'vertical-lr';
	}
	return span;
}

export class Box {
	dimensions = [0, 0, 0, 0];
	element;
	labels = [];
	spacing = 14;
	#showBorders = true;

	constructor (name, type) {
		const box = document.createElement('div');
		Object.assign(box.style, boxStyles);
		box.style.backgroundColor = colors[type].box;
		box.style.border = `1px ${type === 'position' ? 'dashed' : 'solid'} ${colors[type].border}`;
		const numberOfLabels = type === 'content' ? 2 : 4;
		for (let i = 0; i < numberOfLabels; i++) {
			const label = createDimensionLabel(i);
			this.labels.push(label);
			this.updateDimensionLabel(i);
			box.append(label);
		}
		const label = createBoxLabel(name);
		this.labels.push(label);
		box.append(label);
		this.element = box;
	}

	get showBorders () { return this.#showBorders; }
	set showBorders (value) {
		if (this.#showBorders === value) return;
		this.#showBorders = value;
		this.update(this.dimensions, true);
	}

	updateDimensionLabel (index, unit = 'px') {
		this.labels[index].innerText = isZero(this.dimensions[index]) ? !Boolean(this.spacing) ? '' : '-' : `${this.dimensions[index]}${unit}`;
	}

	update (value, force = false) {
		if (!force && arraysMatch(this.dimensions, value)) return;
		this.dimensions = value;
		this.element.style.paddingTop = `${Math.max(this.dimensions[0], this.spacing)}px`;
		this.element.style.paddingRight = `${Math.max(this.dimensions[1], this.spacing)}px`;
		this.element.style.paddingBottom = `${Math.max(this.dimensions[2], this.spacing)}px`;
		this.element.style.paddingLeft = `${Math.max(this.dimensions[3], this.spacing)}px`;
		this.element.style.borderTopWidth = !this.#showBorders || !Boolean(this.spacing) && isZero(this.dimensions[0]) ? '0px' : '1px';
		this.element.style.borderRightWidth = !this.#showBorders || !Boolean(this.spacing) && isZero(this.dimensions[1]) ? '0px' : '1px';
		this.element.style.borderBottomWidth = !this.#showBorders || !Boolean(this.spacing) && isZero(this.dimensions[2]) ? '0px' : '1px';
		this.element.style.borderLeftWidth = !this.#showBorders || !Boolean(this.spacing) && isZero(this.dimensions[3]) ? '0px' : '1px';
		this.updateDimensionLabel(0);
		this.updateDimensionLabel(1);
		this.updateDimensionLabel(2);
		this.updateDimensionLabel(3);
	}
}

export class ContentBox extends Box {
	dimensions = [0, 0];
	#showBorders = true;

	constructor (name) {
		super(name, 'content');
	}

	get showBorders () { return this.#showBorders; }
	set showBorders (value) {
		if (this.#showBorders === value) return;
		this.#showBorders = value;
		this.update(this.dimensions, true);
	}

	update (value, force = false) {
		if (!force && arraysMatch(this.dimensions, value)) return;
		this.dimensions = value;
		this.element.style.borderWidth = this.#showBorders ? '1px' : '0px';
		const contentWidth = Math.max(this.dimensions[0], this.spacing * 4);
		const contentHeight = Math.max(this.dimensions[1], this.spacing * 4);
		this.element.style.width = `${contentWidth}px`;
		this.element.style.minWidth = `${contentWidth}px`;
		this.element.style.maxWidth = `${contentWidth}px`;
		this.element.style.height = `${contentHeight}px`;
		this.element.style.minHeight = `${contentHeight}px`;
		this.element.style.maxHeight = `${contentHeight}px`;
		this.updateDimensionLabel(0);
		this.updateDimensionLabel(1);
	}
}
