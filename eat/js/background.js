chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html',
    {id: 'eat', innerBounds: {width: 800, height: 550}});
});
