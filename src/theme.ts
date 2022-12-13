// Function to get theme
function getTheme(): string {
	if (
		!localStorage.theme ||
		localStorage.theme === 'null' ||
		localStorage.theme === 'undefined'
	) {
		localStorage.theme = 'from-indigo-500 to-green-600';
	}
	return localStorage.theme;
}

// Function to set theme
function setTheme(theme: string): void {
	localStorage.theme = theme;
}

export { getTheme, setTheme };
