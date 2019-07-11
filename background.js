chrome.webRequest.onBeforeRequest.addListener(
    function() { 
      return {cancel: true}; 
    },
    { urls: [
      "*://*.googleadservices.com/*",
      "*://*.googlesyndication.com/*",
      "*://*.doubleclick.net/*"
    ]},
    ["blocking"]
  );