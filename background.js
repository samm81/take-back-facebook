'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  const defaultoptions = { 'tbf_init': true, 'gray': true, 'freeze': true, 'likes': false, 'likebutton': false, 'remove': true, 'removepopups': true };
  chrome.storage.sync.get(['tbf_init'], function(result) {
	if (result['tbf_init'] !== true) {
	  chrome.storage.sync.set(defaultoptions);
	}
  });
});
