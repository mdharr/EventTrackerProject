console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
});

// init begin

function init() {

	let homeLink = document.getElementById('homeLink');
	homeLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";
		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let welcome = document.getElementById('welcome');
		let pacman = document.getElementById('pacman');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== welcome || mainDivs[i] !== pacman) {
				mainDivs[i].style.display = 'none';
			}
		}
		welcome.style.display = 'block';
		pacman.style.display = 'block';
		let updateLink = document.getElementById('updateLink');
		let deleteLink = document.getElementById('deleteLink');
		updateLink.style.display = 'none';
		deleteLink.style.display = 'none';
	});

	let arcadeLink = document.getElementById('arcadeLink');
	arcadeLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";
		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let arcadeList = document.getElementById('arcadeList');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== arcadeList) {
				mainDivs[i].style.display = 'none';
			}
		}
		let updateLink = document.getElementById('updateLink');
		updateLink.style.display = 'none';
		let deleteLink = document.getElementById('deleteLink');
		deleteLink.style.display = 'none';

		arcadeList.style.display = 'block';
		loadArcades();
	});

	let searchLink = document.getElementById('searchLink');
	searchLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";
		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let searchDiv = document.getElementById('searchDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== searchDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		updateLink.style.display = 'none';
		deleteLink.style.display = 'none';
		searchDiv.style.display = 'block';
		document.arcadeForm.lookup.addEventListener('click', function(e) {
			e.preventDefault();
			let arcadeId = document.arcadeForm.arcadeId.value;
			console.log(e.target.parentElement);
			let arcadeIdDiv = document.getElementById('arcadeIdDiv');
			if(arcadeIdDiv === null) {
			console.log(e);
			
			let previousArcadeIdDiv = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
			let newArcadeId = document.createElement('div');
			newArcadeId.id = 'arcadeIdDiv';
			
			previousArcadeIdDiv.parentElement.insertBefore(newArcadeId, previousArcadeIdDiv);
			
			arcadeIdDiv = newArcadeId;
			
			}
			console.log(e);
			console.log(arcadeIdDiv);
			console.log(arcadeId);
			arcadeIdDiv.id = arcadeId;
			if (!isNaN(arcadeId) && arcadeId > 0) {
				getArcade(arcadeId);
			}


		});


	});

	let addLink = document.getElementById('addLink');
	addLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";

		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let newArcadeDiv = document.getElementById('newArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== newArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		updateLink.style.display = 'none';
		deleteLink.style.display = 'none';
		newArcadeDiv.style.display = 'block';


		let createArcadeForm = document.getElementById('createArcadeForm');
		console.log(createArcadeForm);
		document.createArcadeForm.submit.addEventListener('click', function(e) {
			e.preventDefault();
			console.log('Adding arcade');
			let newArcade = {
				name: document.createArcadeForm.name.value,
				description: document.createArcadeForm.description.value,
				imageUrl: document.createArcadeForm.imageUrl.value,
			};

			console.log(newArcade);
			addArcade(newArcade);
			document.getElementById('newArcadeDiv').style.display = 'none';
		});



	});

	let updateLink = document.getElementById('updateLink');
	updateLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";
		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let updateArcadeDiv = document.getElementById('updateArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== updateArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		updateArcadeDiv.style.display = 'block';

		let updateArcadeForm = document.getElementById('updateArcadeForm');
		console.log(updateArcadeForm);
		document.updateArcadeForm.submit.addEventListener('click', function(e) {
			e.preventDefault();
			console.log('Updating arcade');
			// trying to pass arcade id to arcade id div to pass to update form
			let arcadeIdDiv = document.getElementById('arcadeIdDiv');
			if(arcadeIdDiv === null) {
			console.log(e);
			
			let previousArcadeIdDiv = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
			let newArcadeId = document.createElement('div');
			newArcadeId.id = 'arcadeIdDiv';
			
			previousArcadeIdDiv.parentElement.insertBefore(newArcadeId, previousArcadeIdDiv);
			
			arcadeIdDiv = newArcadeId;
			
			}
			arcadeIdDiv.id = arcadeIdDiv.previousElementSibling.id;
			
			console.log(arcadeIdDiv.id);
			let updatedArcade = {
				name: document.updateArcadeForm.name.value,
				description: document.updateArcadeForm.description.value,
				imageUrl: document.updateArcadeForm.imageUrl.value,
			};
			updatedArcade.id = arcadeIdDiv.id;

			console.log(updatedArcade);
			updateArcadeDiv.style.display = 'none';
			updateArcade(updatedArcade);
		});
		updateLink.style.display = 'none';
		let deleteLink = document.getElementById('deleteLink');
		deleteLink.style.display = 'none';
	});

	let deleteLink = document.getElementById('deleteLink');
	deleteLink.addEventListener('click', function(e) {
		e.preventDefault();
		document.body.style.backgroundImage = "url('/images/ArcadeHomePage.png')";
		let starfield = document.getElementById('starfield');
		starfield.style.display = 'none';
		let deleteArcadeDiv = document.getElementById('deleteArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== deleteArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		let updateLink = document.getElementById('updateLink');
		updateLink.style.display = 'none';
		deleteLink.style.display = 'none';
		let arcadeListDiv = document.getElementById('arcadeList');
		
		console.log(arcadeListDiv);
		
		arcadeId = arcadeListDiv.previousElementSibling.id;
		deleteArcade(arcadeId);
		
		// reset to welcome div
		let welcome = document.getElementById('welcome');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== welcome || mainDivs[i] !== pacman) {
				mainDivs[i].style.display = 'none';
			}
		}
		welcome.style.display = 'block';
		pacman.style.display = 'block';
		
	});

	let gamesLink = document.getElementById('gamesLink');
	gamesLink.addEventListener('click', function(e) {
		e.preventDefault();
		let gamesList = document.getElementById('gamesList');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== gamesList) {
				mainDivs[i].style.display = 'none';
			}
		}
		updateLink.style.display = 'none';
		deleteLink.style.display = 'none';
		gamesList.style.display = 'block';
		document.body.style.backgroundImage = 'none';
		//		document.body.appendChild(document.getElementById('canvas'));
		loadCanvas();
	});



}

// init end

// list all arcades begin

function loadArcades() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/arcades');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let arcadesList = JSON.parse(xhr.responseText);
				console.log(arcadesList);
				buildTable(arcadesList);
			}
			else {
				//TODO - display an error
			}
		}
	};

	xhr.send();
}

// build table for list all arcades and display begin


let buildTable = function(arcadesList) {
	console.log("getting to table");
	console.log(arcadesList);
	if (document.getElementById('arcadeListTable') != undefined) {
		document.getElementById('arcadeListTable').parentElement.removeChild(document.getElementById('arcadeListTable'));
	}
	let tableDiv = document.getElementById('arcadeList');
	let table = document.createElement('table');
	table.id = "arcadeListTable";
	let tHead = document.createElement('thead');
	let headerRow = document.createElement('tr');
	for (property in arcadesList[0]) {
		if (property === 'id' || property === 'name') {
			let th = document.createElement('th');
			th.textContent = property.toUpperCase();
			headerRow.appendChild(th);
		}


	}

	tHead.appendChild(headerRow);
	table.appendChild(tHead);

	let tBody = document.createElement('tbody');


	arcadesList.forEach(function(arcade) {

		let tr = document.createElement('tr');
		let arcadeId = document.createElement('td');
		arcadeId.textContent = arcade.id;

		let nameData = document.createElement('td');
		nameData.style.fontSize = '25px';
		nameData.textContent = arcade.name.substring(0, 1).toUpperCase() + arcade.name.substring(1, arcade.name.length).toLowerCase();
		tr.appendChild(arcadeId);
		tr.appendChild(nameData);
		tBody.appendChild(tr);

		tr.addEventListener('click', function(e) {
			let arcadeList = document.getElementById('arcadeList');
			arcadeList.style.display = 'none';
			console.log('hiding table');
			let arcadeDetails = document.getElementById('arcadeDetails');
			arcadeDetails.textContent = '';
			arcadeDetails.style.display = 'block';
			let arcadesUl = document.createElement('ul');
			arcadesUl.style.margin = '60px';

			for (property in arcade) {
				let arcadeLi = document.createElement('li');
				if (property === "imageUrl") {
					let arcadeImg = document.createElement('img');
					arcadeImg.className = 'zoomV2';
					arcadeImg.src = arcade[property];
					arcadeImg.style.width = '300px';
					arcadeImg.style.height = 'auto';
					arcadeImg.style.border = '2px solid white';
					arcadeImg.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
					arcadeImg.style.margin = 'auto';
					arcadeDetails.appendChild(arcadeImg);
				} else if (property === 'id') {
					// trying to pass arcade id to arcade id div to pass to update form
					let arcadeIdDiv = document.getElementById('arcadeIdDiv'); 
					if (arcadeIdDiv === null) {
						arcadeIdDiv = document.createElement('div');
						let arcadeList = document.getElementById('arcadeList');
						arcadeList.parentElement.insertBefore(arcadeIdDiv, arcadeList);
					}
					console.log(arcadeIdDiv);
					console.log();
					arcadeIdDiv.id = e.target.previousElementSibling.textContent;
				} else {
					arcadeLi.className = 'zoomV2';
					arcadeLi.style.color = 'white';
					arcadeLi.style.fontSize = '25px';
					arcadeLi.style.marginLeft = '50px';
					arcadeLi.style.marginRight = '50px';
					arcadeLi.style.marginBottom = '50px';
					arcadeLi.style.padding = '5px';
					arcadeLi.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
					arcadeLi.style.listStyle = 'none';
					arcadeLi.style.fontSize = '20px';
					arcadeLi.style.border = '1px solid white';
					arcadeLi.textContent = property.toUpperCase() + ": " + arcade[property];

				}

				arcadesUl.appendChild(arcadeLi);
			}
			arcadeDetails.appendChild(arcadesUl);
			arcadeDetails.style.textAlign = "center";
			let updateArcadeLink = document.getElementById('updateLink');
			updateArcadeLink.style.display = 'block';
			let deleteArcadeLink = document.getElementById('deleteLink');
			deleteArcadeLink.style.display = 'block';

		});

	});


	table.appendChild(tBody);

	tableDiv.appendChild(table);

	let searchDiv = document.getElementById('searchDiv');
	searchDiv.style.display = "none";
	singleArcadeDiv.style.display = "block";

}

// build table and list all arcades end


// begin create arcade

function addArcade(newArcade) {
	//xhr stuff here
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/arcades', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let arcade = JSON.parse(xhr.responseText);
				console.log(arcade);
				displayArcade(arcade);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.send(JSON.stringify(newArcade));

}

// end create arcade
// create a hidden div and assign the current arcades id to it.

// update arcade begin

function updateArcade(arcade) {

	let xhr = new XMLHttpRequest();

	xhr.open('PUT', 'api/arcades/' + arcade.id, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xhr.responseText)
				let arcade = JSON.parse(xhr.responseText);
				console.log(arcade);
				displayArcade(arcade);
			} else {
				console.log("Request failed: " + xhr.status);
				console.log("Arcade not updated.")
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");

	// need help here

	xhr.send(JSON.stringify(arcade));
}

// update arcade end


// delete arcade begin

function deleteArcade(arcadeId) {

	let xhr = new XMLHttpRequest();

	xhr.open('DELETE', 'api/arcades/' + arcadeId, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
			} else {
				console.log("Request failed: " + xhr.status);
				console.log("Arcade not deleted.")
			}
		}
	};
	xhr.send();

}

// delete arcade end


// get single arcade by id begin

function getArcade(arcadeId) {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/arcades/' + arcadeId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log(xhr.responseText)
				let arcade = JSON.parse(xhr.responseText);
				console.log(arcade);
				displayArcade(arcade);
			} else {
				console.log("Request failed: " + xhr.status);
				console.log("Arcade not found.")
			}
		}
	};

	xhr.send();
}

function displayArcade(arcade) {
	let singleArcadeDiv = document.getElementById('singleArcadeDiv');
	singleArcadeDiv.textContent = '';

	let arcadeHeader = document.createElement('h1');
	let arcadeBlockQuote = document.createElement('blockquote');
	let singleArcadeImage = document.createElement('img');
	for (property in arcade) {

		if (property === "imageUrl") {
			singleArcadeImage.className = 'zoomV2';
			singleArcadeImage.src = arcade[property];
			singleArcadeImage.style.width = '300px';
			singleArcadeImage.style.height = 'auto';
			singleArcadeImage.style.border = '2px solid white';
			singleArcadeImage.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			singleArcadeImage.style.marginBottom = '40px';
			singleArcadeImage.style.marginTop = '15px';

		} else if (property === "name") {
			arcadeHeader.className = 'zoomV2';
			arcadeHeader.style.color = 'white';
			arcadeHeader.style.fontSize = '20px';
			arcadeHeader.style.marginLeft = '150px';
			arcadeHeader.style.marginRight = '150px';
			arcadeHeader.style.marginBottom = '50px';
			arcadeHeader.style.padding = '15px';
			arcadeHeader.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			arcadeHeader.style.border = '1px solid white';
			arcadeHeader.textContent = property.toUpperCase() + ": " + arcade[property];

		} else if (property === "description") {

			arcadeBlockQuote.className = 'zoomV2';
			arcadeBlockQuote.style.color = 'white';
			arcadeBlockQuote.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			arcadeBlockQuote.style.fontSize = '20px';
			arcadeBlockQuote.style.border = '1px solid white';
			arcadeBlockQuote.style.marginLeft = '150px';
			arcadeBlockQuote.style.marginRight = '150px';
			arcadeBlockQuote.style.marginBottom = '100px';
			arcadeBlockQuote.style.padding = '25px';
			arcadeBlockQuote.textContent = property.toUpperCase() + ": " + arcade[property];

		}


		// retrieve games later
		// let arcadeId = arcade.id;
		// getGames(arcadeId);
	}
	singleArcadeDiv.appendChild(singleArcadeImage);
	singleArcadeDiv.appendChild(arcadeHeader);
	singleArcadeDiv.appendChild(arcadeBlockQuote);
	singleArcadeDiv.style.textAlign = "center";

	let searchDiv = document.getElementById('searchDiv');
	searchDiv.style.display = "none";
	singleArcadeDiv.style.display = "block";
	let updateArcadeLink = document.getElementById('updateLink');
	updateArcadeLink.style.display = 'block';
	let deleteArcadeLink = document.getElementById('deleteLink');
	deleteArcadeLink.style.display = 'block';
	let arcadeListLink = document.getElementById('arcadeLink');
	arcadeListLink.addEventListener('click', function(e) {
		singleArcadeDiv.removeChild(singleArcadeImage);
		singleArcadeDiv.removeChild(arcadeHeader);
		singleArcadeDiv.removeChild(arcadeBlockQuote);
	});
}

function loadCanvas() {
	let starfield = document.getElementById('starfield');
	starfield.style.display = 'block';
	const canvas = document.getElementById("canvas");
	const c = canvas.getContext("2d");

	let w;
	let h;

	const setCanvasExtents = () => {
		w = document.body.clientWidth;
		h = document.body.clientHeight;
		canvas.width = w;
		canvas.height = h;
	};

	setCanvasExtents();

	window.onresize = () => {
		setCanvasExtents();
	};

	const makeStars = count => {
		const out = [];
		for (let i = 0; i < count; i++) {
			const s = {
				x: Math.random() * 1600 - 800,
				y: Math.random() * 900 - 450,
				z: Math.random() * 1000
			};
			out.push(s);
		}
		return out;
	};

	let stars = makeStars(1000);

	const clear = () => {
		c.fillStyle = "black";
		c.fillRect(0, 0, canvas.width, canvas.height);
	};

	const putPixel = (x, y, brightness) => {
		const intensity = brightness * 255;
		const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
		c.fillStyle = rgb;
		c.fillRect(x, y, 2, 2);
	};

	const moveStars = distance => {
		const count = stars.length;
		for (var i = 0; i < count; i++) {
			const s = stars[i];
			s.z -= distance;
			while (s.z <= 1) {
				s.z += 1000;
			}
		}
	};

	let prevTime;
	const init = time => {
		prevTime = time;
		requestAnimationFrame(tick);
	};

	const tick = time => {
		let elapsed = time - prevTime;
		prevTime = time;

		moveStars(elapsed * 0.1);

		clear();

		const cx = w / 2;
		const cy = h / 2;

		const count = stars.length;
		for (var i = 0; i < count; i++) {
			const star = stars[i];

			const x = cx + star.x / (star.z * 0.001);
			const y = cy + star.y / (star.z * 0.001);

			if (x < 0 || x >= w || y < 0 || y >= h) {
				continue;
			}

			const d = star.z / 1000.0;
			const b = 1 - d * d;

			putPixel(x, y, b);
		}

		requestAnimationFrame(tick);
	};

	requestAnimationFrame(init);
}

/*let getGames = function(arcadeId) {
	
	
}*/
