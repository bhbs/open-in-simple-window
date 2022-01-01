chrome.action.onClicked.addListener((tab) => {
  const tabId = tab.id;
  if (tabId)
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["script.js"],
    });
});
