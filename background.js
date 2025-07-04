let isProxyEnabled = false;

// Function to enable the proxy
function enableProxy(host, port) {
  const config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "http",
        host: host,
        port: port
      },
      bypassList: ["localhost"]
    }
  };

  chrome.proxy.settings.set({ value: config, scope: 'regular' }, () => {
    console.log("Proxy enabled");
    isProxyEnabled = true;
    updateIcon();
  });
}

// Function to disable the proxy
function disableProxy() {
  const config = {
    mode: "direct"
  };

  chrome.proxy.settings.set({ value: config, scope: 'regular' }, () => {
    console.log("Proxy disabled");
    isProxyEnabled = false;
    updateIcon();
  });
}

// Function to update the icon and title
function updateIcon() {
  if (isProxyEnabled) {
    chrome.action.setIcon({ path: "icons/icon-on-128.png" });
    chrome.action.setTitle({ title: "Proxy is On" });
  } else {
    chrome.action.setIcon({ path: "icons/icon-off-128.png" });
    chrome.action.setTitle({ title: "Proxy is Off" });
  }
}

// Listen for the extension icon click
chrome.action.onClicked.addListener(() => {
  if (isProxyEnabled) {
    disableProxy();
  } else {
    chrome.storage.local.get(['proxyHost', 'proxyPort'], (result) => {
      if (result.proxyHost && result.proxyPort) {
        enableProxy(result.proxyHost, result.proxyPort);
      } else {
        // Open options page if settings are not configured
        chrome.runtime.openOptionsPage();
      }
    });
  }
});

// Set the initial icon state
chrome.proxy.settings.get({ incognito: false }, (details) => {
    isProxyEnabled = details.value.mode !== 'direct';
    updateIcon();
});
