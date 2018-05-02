'use strict';

document.querySelectorAll('input[type=checkbox]').forEach(function(checkbox) {
  const option = checkbox.parentNode.parentNode.id;
  chrome.storage.sync.get([option], function(result) {
    const checked = result[option];
    checkbox.checked = checked;
    if (checked) {
      checkbox.parentNode.parentNode.classList.toggle('checked');
    }
  });

  checkbox.onclick = function() {
    const option = this.parentNode.parentNode.id;
    const checked = this.checked;
    let kv = {};
    kv[option] = checked;
    chrome.storage.sync.set(kv);
    this.parentNode.firstElementChild.classList.remove('invisible');
    this.parentNode.parentNode.classList.toggle('checked');
  }
});

document.querySelectorAll('.why').forEach(function(why) {
  why.onclick = function() {
    const option = this.parentNode.id;
    const explanation = document.querySelector('#' + option + '-explanation');
    explanation.classList.toggle('invisible');
  }
});
