import { turnPhone } from './turn-phone';
import { getTime, getDay, getDate } from './date-time';
import { startCamera, stopCamera } from './camera';
import { getTheme, setTheme } from './theme';

// Add event listener to turn phone button
document.getElementById('turn-phone-button')?.addEventListener('click', () => {
	turnPhone();
});

// Add day, time amd date to respective elements
document.querySelectorAll('#time').forEach((element) => {
	element.textContent = getTime();
});
document.getElementById('day')!.innerText = getDay();
document.getElementById('date')!.innerText = getDate();

setInterval(() => {
	document.querySelectorAll('#time').forEach((element) => {
		element.textContent = getTime();
	});
	document.getElementById('day')!.innerText = getDay();
	document.getElementById('date')!.innerText = getDate();
}, 60000);

// Add event listener to all application icons to open respective pages
document.getElementById('contact-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('contact')?.classList.remove('hidden');
});

document.getElementById('form-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('form')?.classList.remove('hidden');
});

document.getElementById('camera-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('camera')?.classList.remove('hidden');
	startCamera();
});

document.getElementById('settings-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('settings')?.classList.remove('hidden');
});

document.getElementById('blog-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('blog')?.classList.remove('hidden');
});

document.getElementById('skills-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('skills')?.classList.remove('hidden');
});

document.getElementById('profile-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('profile')?.classList.remove('hidden');
});

document.getElementById('projects-icon')?.addEventListener('click', () => {
	document.getElementById('home')?.classList.toggle('hidden');
	document.getElementById('top-components')?.classList.toggle('bg-black');
	document.getElementById('navigation-bottom')?.classList.toggle('bg-black');
	document.getElementById('projects')?.classList.remove('hidden');
});

document.getElementById('navigation-home')?.addEventListener('click', () => {
	document.getElementById('top-components')?.classList.remove('bg-black');
	document.getElementById('navigation-bottom')?.classList.remove('bg-black');
	document.getElementById('home')?.classList.remove('hidden');
	document.getElementById('contact')?.classList.add('hidden');
	document.getElementById('form')?.classList.add('hidden');
	document.getElementById('camera')?.classList.add('hidden');
	document.getElementById('settings')?.classList.add('hidden');
	document.getElementById('blog')?.classList.add('hidden');
	document.getElementById('skills')?.classList.add('hidden');
	document.getElementById('profile')?.classList.add('hidden');
	document.getElementById('projects')?.classList.add('hidden');
	stopCamera();
});

document.getElementById('navigation-back')?.addEventListener('click', () => {
	document.getElementById('top-components')?.classList.remove('bg-black');
	document.getElementById('navigation-bottom')?.classList.remove('bg-black');
	document.getElementById('home')?.classList.remove('hidden');
	document.getElementById('contact')?.classList.add('hidden');
	document.getElementById('form')?.classList.add('hidden');
	document.getElementById('camera')?.classList.add('hidden');
	document.getElementById('settings')?.classList.add('hidden');
	document.getElementById('blog')?.classList.add('hidden');
	document.getElementById('skills')?.classList.add('hidden');
	document.getElementById('profile')?.classList.add('hidden');
	document.getElementById('projects')?.classList.add('hidden');
	stopCamera();
});

// Add event listener to set theme on window load
window.addEventListener('load', () => {
	document
		.getElementById('mobile-front')
		?.classList.add(getTheme().split(' ')[0]);
	document
		.getElementById('mobile-front')
		?.classList.add(getTheme().split(' ')[1]);
});

// Add event listener to theme buttons to toggle theme
document.querySelectorAll('#toggle-theme').forEach((element) => {
	element.addEventListener('click', () => {
		setTheme((element as HTMLButtonElement).value);

		// Reset all themes
		document
			.getElementById('mobile-front')
			?.classList.remove('from-indigo-500');
		document.getElementById('mobile-front')?.classList.remove('to-green-600');
		document.getElementById('mobile-front')?.classList.remove('from-red-500');
		document.getElementById('mobile-front')?.classList.remove('to-violet-600');
		document
			.getElementById('mobile-front')
			?.classList.remove('from-yellow-400');
		document.getElementById('mobile-front')?.classList.remove('to-red-600');

		// Set new theme
		document
			.getElementById('mobile-front')
			?.classList.add(getTheme().split(' ')[0]);
		document
			.getElementById('mobile-front')
			?.classList.add(getTheme().split(' ')[1]);
	});
});
