(function() {
	setInterval(function () {
		document.title = 'Facebook';
	}, 20);
})();

(function() {
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = chrome.extension.getURL('facebook_gray.ico');
	document.getElementsByTagName('head')[0].appendChild(link);
})();

(function() {
	var bar = document.querySelector('div._2t-a._4pmj._2t-d');
	var tbf = document.createElement('div');
	var a = document.createElement('a');
	a.innerText = 'TAKE BACK';
	a.href = 'https://github.com/samm81/take-back-facebook';
	a.target = '_blank';
	tbf.appendChild(a);
	tbf.id = 'take_back_facebook';
	tbf.className = '_cy7 _2s25';
	bar.prepend(tbf);
})();
