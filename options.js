const typeSelect = document.getElementById('proxy-type');
const hostInput = document.getElementById('proxy-host');
const portInput = document.getElementById('proxy-port');
const saveButton = document.getElementById('save');
const statusDiv = document.getElementById('status');

// Load saved settings
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['proxyType', 'proxyHost', 'proxyPort'], (result) => {
    typeSelect.value = result.proxyType || 'http';
    hostInput.value = result.proxyHost || '';
    portInput.value = result.proxyPort || '';
  });
});

// Save settings
saveButton.addEventListener('click', () => {
  const type = typeSelect.value;
  const host = hostInput.value;
  const port = parseInt(portInput.value, 10);

  if (host && !isNaN(port)) {
    chrome.storage.local.set({ proxyType: type, proxyHost: host, proxyPort: port }, () => {
      statusDiv.textContent = 'Settings saved.';
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 2000);
    });
  } else {
    statusDiv.textContent = 'Please enter a valid host and port.';
    statusDiv.style.color = 'red';
  }
});
