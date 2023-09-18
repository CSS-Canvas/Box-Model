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

export const colors = {
	content:  { box: 'hsl(209, 61%, 77%)', border: 'hsl(209, 61%, 67%)' },
	padding:  { box: 'hsl(102, 37%, 79%)', border: 'hsl(102, 37%, 69%)' },
	border:   { box: 'hsl(45, 100%, 87%)', border: 'hsl(45, 100%, 77%)' },
	margin:   { box: 'hsl(31, 88%, 80%)', border: 'hsl(31, 88%, 70%)' },
	position: { box: 'transparent', border: 'black' }
} as const;
