// Listen to content.js events
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.count || request.count === 0) {
      chrome.browserAction.setBadgeText({'text': request.count.toString()})
    }
  }
);
