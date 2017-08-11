$(document).ready(function() {
  // Select the target node (tweet modal)
  var target = $('.PermalinkOverlay-modal').get(0);

  // Create an observer instance
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {

      // Get the Twitter modal window replies count
      var loneTweetsCount = $('.PermalinkOverlay-body .ThreadedConversation--loneTweet .tweet').length
      var threadedTweetsCount = $('.PermalinkOverlay-body .ThreadedConversation .tweet').length
      var total = loneTweetsCount + threadedTweetsCount

      // Send message to background.js so we can set the badge text
      chrome.extension.sendMessage({'count': total})

    });
  });

  // Configuration of the observer
  var config = { attributes:true, subtree: true };

  // Pass in the target node, as well as the observer options
  observer.observe(target, config);

});
