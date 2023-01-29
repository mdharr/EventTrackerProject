console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
});

function init() {

	// if eventListener != this eventListener {remove it}
	
	let homeLink = document.getElementById('homeLink');
	homeLink.addEventListener('click', function(e){
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





function loadCanvas() {
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

	let tableDiv = document.getElementById('arcadeList');

	let table = document.createElement('table');
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


// begin create arcade

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

function addArcade(newArcade) {
	//xhr stuff here
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/arcades', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let arcade = JSON.parse(xhr.responseText);
				console.log(arcade);
				displayArcades(arcade);
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



function typingEffect() {

}