/* Load JSON */
var xhttp,
	data,
	conditions;
if (window.XMLHttpRequest) {
	xhttp = new XMLHttpRequest();
} else {
	xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.addEventListener('readystatechange', function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(this.responseText);
	var dataL = data.length;
	conditions = "if (" + data[0].condition + ") {nextAction = " + data[0].action + ";}";
	for (var i in data) {
		if (i != 0) {
			conditions += "else if (" + data[i].condition + ") {nextAction = " + data[i].action + ";}";
		}
	}
	conditions += "else {nextAction = random(fullBlocks);}";
	}
}, false);
xhttp.open("GET", "scripts/actions.json", true);
xhttp.send();

/* Center container */
var container = document.getElementById('container');
container.style.top = (window.innerHeight - 310) / 2 + 'px';

/* Init pixels */
function x(id) {
pixels = document.getElementById(id).querySelectorAll('.pixel');
	pixels[0].style.backgroundColor = '#FFF';
	pixels[4].style.backgroundColor = '#FFF';
	pixels[6].style.backgroundColor = '#FFF';
	pixels[8].style.backgroundColor = '#FFF';
	pixels[12].style.backgroundColor = '#FFF';
	pixels[16].style.backgroundColor = '#FFF';
	pixels[18].style.backgroundColor = '#FFF';
	pixels[20].style.backgroundColor = '#FFF';
	pixels[24].style.backgroundColor = '#FFF';
}
function o(id) {
pixels = document.getElementById(id).querySelectorAll('.pixel');
	pixels[2].style.backgroundColor = '#000';
	pixels[6].style.backgroundColor = '#000';
	pixels[10].style.backgroundColor = '#000';
	pixels[16].style.backgroundColor = '#000';
	pixels[22].style.backgroundColor = '#000';
	pixels[18].style.backgroundColor = '#000';
	pixels[14].style.backgroundColor = '#000';
	pixels[8].style.backgroundColor = '#000';
}

/* Init main logic */
var divs = document.querySelectorAll('.block'),
	divsL = divs.length,
	playerVar = 'o',
	myVar = 'x'
	process = {b1: '', b2: '', b3: '', b4: '', b5: '', b6: '', b7: '', b8: '', b9: ''},
	isStarted = false,
	playFirst = false;
start();
function start() {
	for (var i = 0; i < divsL; i++) {
		divs[i].addEventListener('click', handler, false);
	}
}
function removeClickListener() {
	for (var i = 0; i < divsL; i++) {
		divs[i].removeEventListener('click', handler, false);
	}
}
function handler() {
		isStarted = true;
		if(process['b' + this.id] === '') {
			if (playerVar == 'o') {
				o(this.id);
			} else if (playerVar == 'x') {
				x(this.id);
			}
			process['b' + this.id] = playerVar;
			var handlerCheck = check();
			if (!handlerCheck) {
				next();
			} else {
				removeClickListener();
			}
		}
}
function check() {
	if (process.b1 === process.b2 && process.b2 === process.b3 && process.b1 != '') {
		Alert(process.b1);
		return true;
	} else if (process.b4 === process.b5 && process.b5 === process.b6 && process.b4 != '') {
		Alert(process.b4);
		return true;
	} else if (process.b7 === process.b8 && process.b8 === process.b9 && process.b7 != '') {
		Alert(process.b7);
		return true;
	} else if (process.b1 === process.b4 && process.b4 === process.b7 && process.b1 != '') {
		Alert(process.b1);
		return true;
	} else if (process.b2 === process.b5 && process.b5 === process.b8 && process.b2 != '') {
		Alert(process.b2);
		return true;
	} else if (process.b3 === process.b6 && process.b6 === process.b9 && process.b3 != '') {
		Alert(process.b3);
		return true;
	} else if (process.b1 === process.b5 && process.b5 === process.b9 && process.b1 != '') {
		Alert(process.b1);
		return true;
	} else if (process.b3 === process.b5 && process.b5 === process.b7 && process.b3 != '') {
		Alert(process.b3);
		return true;
	} else if (process.b1 != '' && process.b2 != '' && process.b3 != '' && process.b4 != '' && process.b5 != '' && process.b6 != '' && process.b7 != '' && process.b8 != '' && process.b9 != '') {
		Alert('Draw!');
		return true;
	} else {
		return false;
	}
}
function next() {
	isStarted = true;
	var fullBlocks = [],
		n = 0,
		nextAction;
	for (var i in process) {
		if (process[i] != '') {
			fullBlocks[n] = i.slice(1,2);
			n++;
		}
	}
	eval(conditions);
	if (playerVar == 'o') {
		x(nextAction);
		process['b' + nextAction] = 'x';
	} else if (playerVar == 'x') {
		o(nextAction);
		process['b' + nextAction] = 'o';
	}
	var nextCheck = check();
	if (nextCheck) {
		removeClickListener();
	}
}
function random(m) {
	var s = parseInt(Math.random()*10);
	while (s == 0 || s == m[0] || s == m[1] || s == m[2] || s == m[3] || s == m[4] || s == m[5] || s == m[6] || s == m[7] || s == m[8]) {
		s = parseInt(Math.random()*10);
	}
	return s;
}
function symmetric(number) {
	switch (number) {
		case 1:
			return 3;
		case 3:
			return 7;
		case 7:
			return 3;
		case 9:
			return 1
	}
}

/* Init tools */
var newGame = document.getElementById('newGame');
newGame.addEventListener('click', function() {
	for (var i in process) {
		process[i] = '';
	}
	var pixels = document.querySelectorAll('.pixel'),
		pixelsL = pixels.length;
	for (var i = 0; i < pixelsL; i++) {
		pixels[i].style.backgroundColor = 'transparent';
	}
	alertArea.innerHTML = '';
	isStarted = false;
	playFirst = false;
	start();
}, false);

function Alert(str) {
var alertArea = document.getElementById('alertArea');
	if (str === 'Draw!') {
		alertArea.innerHTML = str;
	} else if (str === playerVar) {
		alertArea.innerHTML = 'You Win!';
	} else {
		alertArea.innerHTML = 'You Lose!';
	}
}

var varChange = document.getElementById('playerVar');
varChange.addEventListener('click', function() {
	var currentVar = varChange.innerHTML;
	if (!isStarted) {
		if (currentVar === 'O') {
			playerVar = 'x';
			myVar = 'o';
			varChange.innerHTML = 'X';
		} else if (currentVar === 'X') {
			playerVar = 'o';
			myVar = 'x';
			varChange.innerHTML = 'O';
		}
	}
}, false);

document.getElementById('order').addEventListener('click', function() {
	if (!isStarted) {
		playFirst = true;
		next();
	}
}, false);