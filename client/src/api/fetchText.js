const fetchTextCustom = (endpoint) => {
	// if text implementation
  let text = fetch(endpoint)
		.then((response) => response.body.getReader())
		.then((reader) => {
			return new ReadableStream({
				start(controller) {
					// The following function handles each data chunk
					function push() {
						// "done" is a Boolean and value a "Uint8Array"
						reader.read().then(({ done, value }) => {
							// If there is no more data to read
							if (done) {
								// console.log("done", done);
								controller.close();
								return;
							}
							// Get the data and send it to the browser via the controller
							controller.enqueue(value);
							// Check chunks by logging to the console
							// console.log(done, value);
							push();
						});
					}
					push();
				},
			});
		})
		.then((stream) =>
			// Respond with our stream
			new Response(stream, {
				headers: { "Content-Type": "text/html" },
			}).text()
		)
		.then((result) => {
			// Do things with result
      console.log("Fetch successful")
			return result;
		});
    
    return text;
};

export default fetchTextCustom;