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
	pixels[2].style.backgroundColor = '#FFF';
	pixels[6].style.backgroundColor = '#FFF';
	pixels[10].style.backgroundColor = '#FFF';
	pixels[16].style.backgroundColor = '#FFF';
	pixels[22].style.backgroundColor = '#FFF';
	pixels[18].style.backgroundColor = '#FFF';
	pixels[14].style.backgroundColor = '#FFF';
	pixels[8].style.backgroundColor = '#FFF';
}
var divs = document.querySelectorAll('.block'),
	divsL = divs.length,
	c = 0;
for (var i = 0; i < divsL; i++) {
	divs[i].addEventListener('click', function(e) {
		if (c == 0) {
			o(this.id);
			c = 1;
		} else {
			x(this.id);
			c = 0;
		}
	}, false);
}