console.log('script.js loaded');

window.addEventListener('load', function(e){
	console.log('page loaded')
	init();
});

function init() {
	loadArcades();
}

function loadArcades() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/arcades');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let arcadesList = JSON.parse(xhr.responseText);
				console.log(arcadesList);
				displayArcades(arcadesList);
			}
			else {
				//TODO - display an error
			}
		}
	};
	
	xhr.send();
}

function displayArcades(arcadesList) {
	//DOM
}