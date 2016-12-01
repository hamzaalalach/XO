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
	process = {b1: '', b2: '', b3: '', b4: '', b5: '', b6: '', b7: '', b8: '', b9: ''};
for (var i = 0; i < divsL; i++) {
	divs[i].addEventListener('click', function(e) {
		if(process['b' + this.id] === '') {
			o(this.id);
			process['b' + this.id] = 'o';
			var bool = check();
			if (!bool) {
				next();
			}
		}
	}, false);
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
	process['b' + randomAction] = 'x';
	x(randomAction);
	check();
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
}, false);
var alertArea = document.getElementById('alertArea');
function Alert(str) {
	if (str === 'Draw!') {
		alertArea.innerHTML = str;
	} else if (str === 'o') {
		alertArea.innerHTML = 'You Win!';
	} else if (str === 'x') {
		alertArea.innerHTML = 'You Lose!';
	}
}