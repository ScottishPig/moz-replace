

var pageMod = require("sdk/page-mod");
var self = require("sdk/self");



pageMod.PageMod({
	include: "*",
	contentScriptFile: self.data.url("replacer.js"),
	onAttach: function( worker ) {
		// DANGER, WILL ROBINSON!
		eval( self.data.load("data.json") );
		worker.port.emit("handleReplace", replacements);
	}
});