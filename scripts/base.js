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
	process = {b1: '', b2: '', b3: '', b4: '', b5: '', b6: '', b7: '', b8: '', b9: ''},
	isStarted = false;
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
	var fullBlocks = [],
		n = 0,
		randomAction;
	for (var i in process) {
		if (process[i] != '') {
			fullBlocks[n] = i.slice(1,2);
			n++;
		}
	}
	randomAction = random(fullBlocks);
	if (playerVar == 'o') {
		x(randomAction);
		process['b' + randomAction] = 'x';
	} else if (playerVar == 'x') {
		o(randomAction);
		process['b' + randomAction] = 'o';
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
			varChange.innerHTML = 'X';
		} else if (currentVar === 'X') {
			playerVar = 'o';
			varChange.innerHTML = 'O';
		}
	}
}, false);