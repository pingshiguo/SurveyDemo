var topoffset = '45px';
var immersed = 0;
var ms = (/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms && ms.length >= 3) {
	immersed = parseFloat(ms[2]);
}
topoffset = (immersed + 45) + 'px';
var t = document.getElementById("header");
t && (t.style.paddingTop = immersed + 'px', t.style.height = topoffset);