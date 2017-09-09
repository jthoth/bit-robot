
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
});
