document.addEventListener('DOMContentLoaded', function() {

  var earn_button = document.getElementById('earn_now');

  earn_button.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.executeScript(tab.id, {code: "var time_default = " + document.getElementById('seconds').value });
        chrome.tabs.executeScript(tab.id, {file: "assets/content_script.js"});
    });
  }, false);
}, false);
