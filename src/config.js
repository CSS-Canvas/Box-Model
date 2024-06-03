export const boxStyles = {
	position: 'relative',
	zIndex: '2',
	display: 'grid',
	placeContent: 'center',
	placeItems: 'center',
	boxSizing: 'border-box',
	fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
	fontSize: '10px'
};

export const boxVariables = [
	'--content-border',
	'--content-box',
	'--padding-border',
	'--padding-box',
	'--border-border',
	'--border-box',
	'--margin-border',
	'--margin-box',
	'--position-border',
	'--position-box'
];

export const themeVariables = {
	'--content-border-dark': 'hsl(191.32deg 28.34% 53.33%)',
	'--content-border-light': 'hsl(209, 61%, 67%)',
	'--content-box-dark': 'hsl(191.32deg 28.34% 63.33%)',
	'--content-box-light': 'hsl(209, 61%, 77%)',

	'--padding-border-dark': 'hsl(71.3deg 36.9% 53.33%)',
	'--padding-border-light': 'hsl(102, 37%, 69%)',
	'--padding-box-dark': 'hsl(71.3deg 36.9% 63.33%)',
	'--padding-box-light': 'hsl(102, 37%, 79%)',

	'--border-border-dark': 'hsl(40.41deg 63.64% 59.8%)',
	'--border-border-light': 'hsl(45, 100%, 77%)',
	'--border-box-dark': 'hsl(40.41deg 63.64% 69.8%)',
	'--border-box-light': 'hsl(45, 100%, 87%)',

	'--margin-border-dark': 'hsl(30.33deg 35.69% 40%)',
	'--margin-border-light': 'hsl(31, 88%, 70%)',
	'--margin-box-dark': 'hsl(30.33deg 35.69% 50%)',
	'--margin-box-light': 'hsl(31, 88%, 80%)',

	'--position-border-dark': 'white',
	'--position-border-light': 'black',
	'--position-box-dark': 'transparent',
	'--position-box-light': 'transparent'
};
