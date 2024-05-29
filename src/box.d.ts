type BoxType = 'content' | 'padding' | 'border' | 'margin' | 'position';

export class Box {
	constructor (name: string, type: BoxType);

	dimensions: [number, number, number, number];
	element: HTMLDivElement;
	labels: Array<HTMLSpanElement>;
	spacing: number;

	get showBorders (): boolean;
	set showBorders (value: boolean);

	get theme (): string;
	set theme (value: string);

	updateDimensionLabel (index: number, unit = 'px'): void;

	update (value: [number, number, number, number], force = false): void;
}

export class ContentBox extends Box {
	constructor (name: string);

	dimensions: [number, number];

	get showBorders (): boolean;
	set showBorders (value: boolean);

	update (value: [number, number], force = false): void;
}
