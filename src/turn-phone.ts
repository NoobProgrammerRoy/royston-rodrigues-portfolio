function turnPhone(): void {
	document.getElementById('mobile-front')?.classList.toggle('flex');
	document.getElementById('mobile-front')?.classList.toggle('hidden');
	document.getElementById('mobile-rear')?.classList.toggle('flex');
	document.getElementById('mobile-rear')?.classList.toggle('hidden');
}

export { turnPhone };
