export const boxStyles = {
	position: 'relative',
	zIndex: '2',
	display: 'grid',
	placeContent: 'center',
	placeItems: 'center',
	boxSizing: 'border-box',
	fontFamily: '\'Segoe UI\', Tahoma, Geneva, Verdana, sans-serif',
	fontSize: '10px'
} as const;

const lightColors = {
	content:  { box: 'hsl(209, 61%, 77%)', border: 'hsl(209, 61%, 67%)' },
	padding:  { box: 'hsl(102, 37%, 79%)', border: 'hsl(102, 37%, 69%)' },
	border:   { box: 'hsl(45, 100%, 87%)', border: 'hsl(45, 100%, 77%)' },
	margin:   { box: 'hsl(31, 88%, 80%)', border: 'hsl(31, 88%, 70%)' },
	position: { box: 'transparent', border: 'black' }
} as const;

const darkColors = {
	content:  { box: 'hsl(191.32deg 28.34% 63.33%)', border: 'hsl(191.32deg 28.34% 53.33%)' },
	padding:  { box: 'hsl(71.3deg 36.9% 63.33%)', border: 'hsl(71.3deg 36.9% 53.33%)' },
	border:   { box: 'hsl(40.41deg 63.64% 69.8%)', border: 'hsl(40.41deg 63.64% 59.8%)' },
	margin:   { box: 'hsl(30.33deg 35.69% 50%)', border: 'hsl(30.33deg 35.69% 40%)' },
	position: { box: 'transparent', border: 'white' }
} as const;

export const themes = {
	dark: darkColors,
	light: lightColors
} as const;
