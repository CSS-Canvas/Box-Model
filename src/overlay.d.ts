export class BoxModelOverlay {
	constructor (element: HTMLElement);

	get enabled (): boolean;
	set enabled (value: boolean);

	hide (): void;

	show (): void;

	render (): void;

	update (): void;
}
