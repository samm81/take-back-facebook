'use strict';

/*
// https://stackoverflow.com/questions/15765451/chrome-extension-to-efficiently-block-domains
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		console.log('caught request');
		console.log(details);
		var dyn = details.url.match(/__dyn=(.*?)&/)[1];
		console.log(dyn);
		console.log(dyn.length);
		return { cancel: (dyn.length < 250) };
	},
	{ urls: [ "*://*.facebook.com/ajax/pagelet/generic.php/LitestandTailLoadPagelet*" ] },
	[ "blocking" ]
);
*/

// if I try this again, need to add to manifest.js:
// "permissions": [ "webRequest", "webRequestBlocking", "tabs", "*://*.facebook.com/*" ],

chrome.runtime.onInstalled.addListener(function (details) {
  const defaultoptions = { 'tbf_init': true, 'gray': true, 'graybadges': true, 'freeze': true, 'likes': false, 'likebutton': false, 'remove': true, 'popups': true };
  chrome.storage.sync.get(['tbf_init'], function(result) {
	if (result['tbf_init'] !== true) {
	  chrome.storage.sync.set(defaultoptions);
	}
  });
});
