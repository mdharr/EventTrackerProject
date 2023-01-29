console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
});

function init() {

	// if eventListener != this eventListener {remove it}

	let homeLink = document.getElementById('homeLink');
	homeLink.addEventListener('click', function(e) {
		e.preventDefault();
		let welcome = document.getElementById('welcome');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== welcome) {
				mainDivs[i].style.display = 'none';
			}
		}
		welcome.style.display = 'block';
	});

	let arcadeLink = document.getElementById('arcadeLink');
	arcadeLink.addEventListener('click', function(e) {
		e.preventDefault();
		let arcadeList = document.getElementById('arcadeList');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== arcadeList) {
				mainDivs[i].style.display = 'none';
			}
		}
		arcadeList.style.display = 'block';
		loadArcades();
	});

	let searchLink = document.getElementById('searchLink');
	searchLink.addEventListener('click', function(e) {
		e.preventDefault();
		let searchDiv = document.getElementById('searchDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== searchDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		searchDiv.style.display = 'block';
		document.arcadeForm.lookup.addEventListener('click', function(e) {
			e.preventDefault();
			let arcadeId = document.arcadeForm.arcadeId.value;
			if (!isNaN(arcadeId) && arcadeId > 0) {
				getArcade(arcadeId);
			}
		});

	});

	let addLink = document.getElementById('addLink');
	addLink.addEventListener('click', function(e) {
		e.preventDefault();
		let newArcadeDiv = document.getElementById('newArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== newArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
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
			//newFilm.title = newFilmForm.title.value; also works
			//TODO: validate film properties
			console.log(newArcade);
			addArcade(newArcade);
		});



	});

	let updateLink = document.getElementById('updateLink');
	updateLink.addEventListener('click', function(e) {
		e.preventDefault();
		let updateArcadeDiv = document.getElementById('updateArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== updateArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		updateArcadeDiv.style.display = 'block';
	});

	let deleteLink = document.getElementById('deleteLink');
	deleteLink.addEventListener('click', function(e) {
		e.preventDefault();
		let deleteArcadeDiv = document.getElementById('deleteArcadeDiv');
		let mainDivs = document.getElementsByClassName('mainDivs');
		for (let i = 0; i < mainDivs.length; i++) {
			if (mainDivs[i] !== deleteArcadeDiv) {
				mainDivs[i].style.display = 'none';
			}
		}
		deleteArcadeDiv.style.display = 'block';
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
		gamesList.style.display = 'block';
	});



}

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
				displayArcades(arcadesList);
			}
			else {
				//TODO - display an error
			}
		}
	};

	xhr.send();
}

// build table for list all arcades

function displayArcades(arcadesList) {
	/*	//DOM
		let tbody = document.getElementById('arcadeList').firstElementChild.firstElementChild.nextElementSibling;
		for (let arcade of arcadesList) {
			//TODO
		}*/



	buildTable(arcadesList);


}

let buildTable = function(arcadesList) {
	console.log("getting to table");
	console.log(arcadesList);
	if(document.getElementById('arcadeListTable') != undefined) {
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
		nameData.textContent = arcade.name.substring(0, 1).toUpperCase() + arcade.name.substring(1, arcade.name.length).toLowerCase();
		tr.appendChild(arcadeId);
		tr.appendChild(nameData);
		tBody.appendChild(tr);

		tr.addEventListener('click', function(e) {
			let arcadeList = document.getElementById('arcadeList');
			arcadeList.style.display = 'none';
			console.log('hiding table');
			let arcadeDetails = document.getElementById('arcadeDetails');
			arcadeDetails.style.display = 'block';
			let arcadesUl = document.createElement('ul');
			arcadesUl.style.margin = '100px';

			for (property in arcade) {
				let arcadeLi = document.createElement('li');
				if (property === "imageUrl") {
					let arcadeImg = document.createElement('img');
					arcadeImg.className = 'zoom';
					arcadeImg.src = arcade[property];
					arcadeImg.style.width = '300px';
					arcadeImg.style.height = 'auto';
					arcadeImg.style.border = '2px solid white';
					arcadeImg.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
					arcadeImg.style.margin = 'auto';
					arcadeDetails.appendChild(arcadeImg);
				} else {
					arcadeLi.className = 'zoom';
					arcadeLi.style.color = 'white';
					arcadeLi.style.marginLeft = '50px';
					arcadeLi.style.marginRight = '50px';
					arcadeLi.style.marginBottom = '50px';
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

		});

	});


	table.appendChild(tBody);

	tableDiv.appendChild(table);

}

// list all arcades end


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


// get single arcade by id begin

function getArcade(arcadeId) {
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	//   with the filmId appended.
	// * On success, if a response was received parse the film data
	//   and pass the film object to displayFilm().
	// * On failure, or if no response text was received, put "Film not found" 
	//   in the filmData div.
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
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.

	for (property in arcade) {
		let arcadeHeader = document.createElement('h1');
		let arcadeBlockQuote = document.createElement('blockquote');
		let singleArcadeImage = document.createElement('img');
		if (property === "imageUrl") {
			singleArcadeImage.className = 'zoom';
			singleArcadeImage.src = arcade[property];
			singleArcadeImage.style.width = '300px';
			singleArcadeImage.style.height = 'auto';
			singleArcadeImage.style.border = '2px solid white';
			singleArcadeImage.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			singleArcadeImage.style.margin = 'auto';
			singleArcadeDiv.appendChild(singleArcadeImage);
		} else if (property === "name") {
			arcadeHeader.className = 'zoom';
			arcadeHeader.style.color = 'white';
			arcadeHeader.style.fontSize = '20px';
			arcadeHeader.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			arcadeHeader.style.border = '1px solid white';
			arcadeHeader.textContent = arcade[property];
			singleArcadeDiv.appendChild(arcadeHeader);
		} else if (property === "description") {

			arcadeBlockQuote.className = 'zoom';
			arcadeBlockQuote.style.color = 'white';
			arcadeBlockQuote.style.backgroundColor = 'rgb(54, 69, 79, 0.8)';
			arcadeBlockQuote.style.fontSize = '20px';
			arcadeBlockQuote.style.border = '1px solid white';
			arcadeBlockQuote.textContent = arcade[property];
			singleArcadeDiv.appendChild(arcadeBlockQuote);
		}
		singleArcadeDiv.style.textAlign = "center";

		let searchDiv = document.getElementById('searchDiv');
		searchDiv.style.display = "none";
		singleArcadeDiv.style.display = "block";

		// retrieve games later
		// let arcadeId = arcade.id;
		// getGames(arcadeId);
	}
}

/*let getGames = function(arcadeId) {
	
}*/
