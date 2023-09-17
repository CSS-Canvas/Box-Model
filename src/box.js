const colors = {
	contentBox: 'hsl(209, 61%, 77%)',
	contentBorder: 'hsl(209, 61%, 67%)',
	paddingBox: 'hsl(102, 37%, 79%)',
	paddingBorder: 'hsl(102, 37%, 69%)',
	borderBox: 'hsl(45, 100%, 87%)',
	borderBorder: 'hsl(45, 100%, 77%)',
	marginBox: 'hsl(31, 88%, 80%)',
	marginBorder: 'hsl(31, 88%, 70%)',
	positionBox: 'transparent',
	positionBorder: 'black'
};

export class BoxModel {
	#dimensions = {
		content: [0, 0],
		padding: [0, 0, 0, 0],
		border: [0, 0, 0, 0],
		margin: [0, 0, 0, 0],
		position: [0, 0, 0, 0]
	}
	#element;
	#parent;
	#spacing = {
		default: 14,
		value: 14
	};

	constructor (parent) {
		this.parent = parent;
	}

	get content () { return this.#dimensions.content; }
	set content (value) {
		this.#dimensions.content = value;
		this.update();
	}

	get padding () { return this.#dimensions.padding; }
	set padding (value) {
		this.#dimensions.padding = value;
		this.update();
	}

	get border () { return this.#dimensions.border; }
	set border (value) {
		this.#dimensions.border = value;
		this.update();
	}

	get margin () { return this.#dimensions.margin; }
	set margin (value) {
		this.#dimensions.margin = value;
		this.update();
	}

	get position () { return this.#dimensions.position; }
	set position (value) {
		this.#dimensions.position = value;
		this.update();
	}

	get parent () { return this.#parent; }
	set parent (value) {
		this.#parent = value;
		this.#element?.remove();
		this.#element = document.createElement('div');
		this.#element.className = 'boxModelDisplay';
		this.#applyBoxStyles(this.#element);
		this.#parent.append(this.#element);
		this.update();
	}

	get allowOverlap () { return !Boolean(this.#spacing.value); }
	set allowOverlap (value) {
		this.#spacing.value = Boolean(value) ? 0 : this.#spacing.default;
	}

	#isZero (value) {
		return !value || value === '0';
	}

	#createLabel (value, index, unit = 'px') {
		const span = document.createElement('span');
		span.style.position = 'absolute';
		span.style.zIndex = '1';
		span.style[['top', 'right', 'bottom', 'left'][index]] = '0';
		if (index % 2 === 1) {
			span.style.textOrientation = 'mixed';
			span.style.writingMode = 'vertical-lr';
		}
		span.innerText = this.#isZero(value[index]) ? this.allowOverlap ? '' : '-' : `${value[index]}${unit}`;
		return span;
	}

	#createName (name) {
		const span = document.createElement('span');
		span.style.position = 'absolute';
		span.style.bottom = '0.15em';
		span.style.left = '0.8ch';
		span.style.pointerEvents = 'none';
		span.innerText = name;
		return span;
	}

	#applyBoxStyles (element) {
		element.style.position = 'relative';
		element.style.zIndex = '2';
		element.style.display = 'grid';
		element.style.placeContent = 'center';
		element.style.placeItems = 'center';
		element.style.boxSizing = 'border-box';
		element.style.fontFamily = '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif';
		element.style.fontSize = '10px';
	}

	#applyBoxPadding (element, type) {
		element.style.paddingTop = `${Math.max(this.#dimensions[type][0], this.#spacing.value)}px`;
		element.style.paddingRight = `${Math.max(this.#dimensions[type][1], this.#spacing.value)}px`;
		element.style.paddingBottom = `${Math.max(this.#dimensions[type][2], this.#spacing.value)}px`;
		element.style.paddingLeft = `${Math.max(this.#dimensions[type][3], this.#spacing.value)}px`;
	}

	#applyBoxBorder (element, type) {
		element.style.borderTopWidth = this.allowOverlap && this.#isZero(this.#dimensions[type][0]) ? '0px' : '1px';
		element.style.borderRightWidth = this.allowOverlap && this.#isZero(this.#dimensions[type][1]) ? '0px' : '1px';
		element.style.borderBottomWidth = this.allowOverlap && this.#isZero(this.#dimensions[type][2]) ? '0px' : '1px';
		element.style.borderLeftWidth = this.allowOverlap && this.#isZero(this.#dimensions[type][3]) ? '0px' : '1px';
	}

	update () {
		// Content.
		const contentBox = document.createElement('div');
		this.#applyBoxStyles(contentBox);
		contentBox.style.backgroundColor = colors.contentBox;
		contentBox.style.border = `1px solid ${colors.contentBorder}`;
		const contentWidth = Math.max(this.content[0], this.#spacing.value * 4);
		const contentHeight = Math.max(this.content[1], this.#spacing.value * 4);
		contentBox.style.width = `${contentWidth}px`;
		contentBox.style.minWidth = `${contentWidth}px`;
		contentBox.style.maxWidth = `${contentWidth}px`;
		contentBox.style.height = `${contentHeight}px`;
		contentBox.style.minHeight = `${contentHeight}px`;
		contentBox.style.maxHeight = `${contentHeight}px`;
		contentBox.append(this.#createLabel(this.content, 0));
		contentBox.append(this.#createLabel(this.content, 1));
		contentBox.append(this.#createName('Content'));

		// Padding.
		const paddingBox = document.createElement('div');
		this.#applyBoxStyles(paddingBox);
		paddingBox.style.backgroundColor = colors.paddingBox;
		paddingBox.style.border = `1px solid ${colors.paddingBorder}`;
		this.#applyBoxPadding(paddingBox, 'padding');
		this.#applyBoxBorder(paddingBox, 'padding');
		paddingBox.append(this.#createLabel(this.padding, 0));
		paddingBox.append(this.#createLabel(this.padding, 1));
		paddingBox.append(this.#createLabel(this.padding, 2));
		paddingBox.append(this.#createLabel(this.padding, 3));
		paddingBox.append(this.#createName('Padding'));

		// Border.
		const borderBox = document.createElement('div');
		this.#applyBoxStyles(borderBox);
		borderBox.style.backgroundColor = colors.borderBox;
		borderBox.style.border = `1px solid ${colors.borderBorder}`;
		this.#applyBoxPadding(borderBox, 'border');
		this.#applyBoxBorder(borderBox, 'border');
		borderBox.append(this.#createLabel(this.border, 0));
		borderBox.append(this.#createLabel(this.border, 1));
		borderBox.append(this.#createLabel(this.border, 2));
		borderBox.append(this.#createLabel(this.border, 3));
		borderBox.append(this.#createName('Border'));

		// Margin.
		const marginBox = document.createElement('div');
		this.#applyBoxStyles(marginBox);
		marginBox.style.backgroundColor = colors.marginBox;
		marginBox.style.border = `1px solid ${colors.marginBorder}`;
		this.#applyBoxPadding(marginBox, 'margin');
		this.#applyBoxBorder(marginBox, 'margin');
		marginBox.append(this.#createLabel(this.margin, 0));
		marginBox.append(this.#createLabel(this.margin, 1));
		marginBox.append(this.#createLabel(this.margin, 2));
		marginBox.append(this.#createLabel(this.margin, 3));
		marginBox.append(this.#createName('Margin'));

		// Position.
		const positionBox = document.createElement('div');
		this.#applyBoxStyles(positionBox);
		positionBox.style.backgroundColor = colors.positionBox;
		positionBox.style.border = `1px dashed ${colors.positionBorder}`;
		this.#applyBoxPadding(positionBox, 'position');
		this.#applyBoxBorder(positionBox, 'position');
		positionBox.append(this.#createLabel(this.position, 0));
		positionBox.append(this.#createLabel(this.position, 1));
		positionBox.append(this.#createLabel(this.position, 2));
		positionBox.append(this.#createLabel(this.position, 3));
		positionBox.append(this.#createName('Position'));

		this.#element.innerHTML = '';
		this.#element.append(positionBox);
		positionBox.append(marginBox);
		marginBox.append(borderBox);
		borderBox.append(paddingBox);
		paddingBox.append(contentBox);
	}
}
