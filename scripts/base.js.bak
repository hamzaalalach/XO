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
	c = 0,
	process = {b1: '', b2: '', b3: '', b4: '', b5: '', b6: '', b7: '', b8: '', b9: ''};
for (var i = 0; i < divsL; i++) {
	divs[i].addEventListener('click', function(e) {
		if(process['b' + this.id] === '') {
			if (c == 0) {
				o(this.id);
				c = 1;
				var t = 'b' + this.id;
				process[t] = 'o';
				check();
			} else {
				x(this.id);
				c = 0;
				var t = 'b' + this.id;
				process[t] = 'x';
				check();
			}
		}
	}, false);
}
function check() {
	if (process.b1 === process.b2 && process.b2 === process.b3 && process.b1 != '') {
		alert(process.b1 + ' wins');
	} else if (process.b4 === process.b5 && process.b5 === process.b6 && process.b4 != '') {
		alert(process.b4 + ' wins')
	} else if (process.b7 === process.b8 && process.b8 === process.b9 && process.b7 != '') {
		alert(process.b7 + ' wins')
	} else if (process.b1 === process.b4 && process.b4 === process.b7 && process.b1 != '') {
		alert(process.b1 + ' wins')
	} else if (process.b2 === process.b5 && process.b5 === process.b8 && process.b2 != '') {
		alert(process.b2 + ' wins')
	} else if (process.b3 === process.b6 && process.b6 === process.b9 && process.b3 != '') {
		alert(process.b3 + ' wins')
	} else if (process.b1 === process.b5 && process.b5 === process.b9 && process.b1 != '') {
		alert(process.b1 + ' wins')
	} else if (process.b3 === process.b5 && process.b5 === process.b7 && process.b3 != '') {
		alert(process.b3 + ' wins')
	} else if (process.b1 != '' && process.b2 != '' && process.b3 != '' && process.b4 != '' && process.b5 != '' && process.b6 != '' && process.b7 != '' && process.b8 != '' && process.b9 != '') {
		alert('Draw!');
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
}, false);