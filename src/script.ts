chrome.runtime.onMessage.addListener(() =>
  window.open(location.href, "", "toolbar=no,location=no")
);
