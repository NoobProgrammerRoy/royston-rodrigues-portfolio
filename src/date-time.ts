function getTime(): string {
	return new Date().toString().split(' ')[4].substring(0, 5);
}

function getDay(): string {
	return new Date().toString().split(' ')[0];
}

function getDate(): string {
	return new Date().toString().split(' ').slice(1, 3).join(' ');
}

export { getTime, getDay, getDate };
