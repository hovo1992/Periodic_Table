HTMLAnchorElement.prototype.click = function (x, y, z, m, n) {
    var itemElems = _$('item');
    itemElems[x].style.textShadow = itemElems[y].style.textShadow = itemElems[z].style.textShadow = itemElems[m].style.textShadow = itemElems[n].style.textShadow = '0 0 5px #fff';
    itemElems[x].style.color = itemElems[y].style.color = itemElems[z].style.color = itemElems[m].style.textShadow = itemElems[n].style.textShadow = 'transparent';
    this.style.textShadow = '0 0 1px #fff';
    this.style.color = 'transparent';
}
function leave() {
    var itemElems = _$('item');
    for (var i = 0; i < itemElems.length; ++i) {
    	itemElems[i].css('color' ,'transparent').css('textShadow', '0 0 5px #fff');
    }
}
function start(id) {
    $(id).style.textShadow = '0 0 1px #fff';
    $(id).style.color = '#d6d1d1';
}

var angle = 0;
function galleryspin(sign) {
	var spinner = $("container");
	angle += sign * 36;
	spinner.style.transform = "rotateY(" + angle + "deg)";
}

function author() {
	var audio = new Audio('content/audio/periodic.mp3');
	audio.play();
}