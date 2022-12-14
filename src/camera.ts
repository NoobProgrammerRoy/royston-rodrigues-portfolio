// Function to start camera
function startCamera(facingMode: string): void {
	stopCamera();
	navigator.mediaDevices
		.getUserMedia({ video: { facingMode } })
		.then((mediaStream) => {
			const video = document.querySelector('video');
			video!.srcObject = mediaStream;
			video!.onloadedmetadata = () => {
				video!.play();
			};
		})
		.catch((err) => {
			// always check for errors at the end.
			console.error(`${err.name}: ${err.message}`);
		});
}

// Function to click picture
function clickPicture(): void {
	const canvas = document.querySelector('canvas');
	const ctx = canvas!.getContext('2d');
	ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
	ctx?.drawImage(
		document.querySelector('video')!,
		0,
		0,
		canvas!.width,
		canvas!.height
	);
}

// Function to stop camera
function stopCamera(): void {
	const video = document.querySelector('video');
	if (video!.srcObject !== null) {
		try {
			const stream = video!.srcObject as any;
			stream.getTracks().forEach((track: { stop: () => any }) => track.stop());
			video!.srcObject = null;
		} catch (err: any) {
			// always check for errors at the end.
			console.error(`${err.name}: ${err.message}`);
		}
	}
}

export { startCamera, stopCamera, clickPicture };
