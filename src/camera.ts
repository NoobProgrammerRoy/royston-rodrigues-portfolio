// Function to start camera
function startCamera(): void {
	navigator.mediaDevices
		.getUserMedia({ video: true })
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

// Function to stop camera
function stopCamera(): void {
	const video = document.querySelector('video');
	if (video!.srcObject !== null) {
		const stream = video!.srcObject as any;
		stream.getTracks().forEach((track: { stop: () => any }) => track.stop());
	}
}

export { startCamera, stopCamera };
