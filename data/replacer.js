
self.port.on("handleReplace", function(replacements) {
	var bodyElement = document.getElementsByTagName("body")[0];
	var bodyString = bodyElement.innerHTML;

	for ( var key in replacements ) {
		while ( bodyString.indexOf(key) > 0 ) {
			bodyString = bodyString.replace(key, replacements[key]);
		}
	}

	bodyElement.innerHTML = bodyString;
});