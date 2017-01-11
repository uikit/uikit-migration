function loadStorage() {
    localStorage['uikit3.migration'] = localStorage['uikit3.migration'] || `{}`;
    return JSON.parse(localStorage['uikit3.migration']);
}

function saveStorage(storage) {
    localStorage['uikit3.migration'] = JSON.stringify(storage);
}

function toggleIcon (storage, tabId) {
    storage[tabId] = !storage[tabId];
    chrome.pageAction.setIcon({
        tabId: tabId,
        path: `uikit-19${(storage[tabId] ? '-active' : '')}.png`
    });
    saveStorage(storage);
}

function runMigrator (storage, tabId) {
    //when active, inject script
    if (storage[tabId]) {
        chrome.tabs.executeScript(tabId, {file: 'migrate.js'});
    }
}

var storage =  loadStorage();

// Update the declarative rules on install or upgrade.
// only activate icon on pages where UIkit 3 was detected by hook.js
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          css: ["html[data-uk_version]"]
        })
      ],
      // ... show the page action.
      actions: [new chrome.declarativeContent.ShowPageAction() ]
    }]);
  });
});

//message sent from hook.js to activate script
chrome.extension.onMessage.addListener(function(message, sender) {
    //set correct state for icon
    chrome.pageAction.setIcon({
        tabId: sender.tab.id,
        path: `uikit-19${(storage[sender.tab.id] ? '-active' : '')}.png`
    });
    runMigrator(storage, sender.tab.id);
});

//listener on icon to toggle state of tab
chrome.pageAction.onClicked.addListener(function (tab) {
    toggleIcon(storage, tab.id);
    runMigrator(storage, tab.id);
});
