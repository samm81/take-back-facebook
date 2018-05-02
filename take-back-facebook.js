'use strict';

(function() {
	const loadfreeze = function() {
		chrome.storage.sync.get(['freeze'], function(result) {
			if (result['freeze']) {
				setInterval(function () {
					document.title = 'Facebook';
				}, 20);
			}
		});
	};

	const flipico = function() {
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = chrome.runtime.getURL('facebook_gray.ico');
		document.getElementsByTagName('head')[0].appendChild(link);
	};

	const inserttakeback = function() {
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
	};

	const loadstylesheets = function() {
		const options = ['gray', 'likes', 'likebutton', 'remove', 'removepopups' ];
		var insertStylesheet = function(option) {
			const link = document.createElement('link');
			link.href = chrome.runtime.getURL('' + option + '.css');
			link.rel = 'stylesheet';
			document.documentElement.insertBefore(link, null);
		}
		chrome.storage.sync.get(null, function(result) {
			options.forEach(function(option) {
				if (result[option]) {
					insertStylesheet(option);
				}
			});
		});
	};

	flipico();
	loadstylesheets();
	loadfreeze();
	inserttakeback();

})();
