'use strict';

document.querySelectorAll('input[type=checkbox]').forEach(function(checkbox) {
  const option = checkbox.parentElement.id;
  chrome.storage.sync.get([option], function(result) {
    const checked = result[option];
    checkbox.checked = checked;
    if (checked) {
      checkbox.parentElement.classList.toggle('checked');
    }
  });

  checkbox.onclick = function() {
    const option = this.parentElement.id;
    const checked = this.checked;
    let kv = {};
    kv[option] = checked;
    chrome.storage.sync.set(kv);
    this.parentElement.classList.toggle('checked');
  }
});
