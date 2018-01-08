function filterFiles(extension) {
  chrome.tabs.executeScript({
      code: 'var extension = "' + extension + '";'
  }, function() {
      chrome.tabs.executeScript({file: 'filterFiles.js'});
  });
}

function createOption(extension) {
  const option = document.createElement('option');
  option.value = extension;
  const text = document.createTextNode('.' + extension);
  option.appendChild(text);
  return option;
}

function receiveMessage(extensions) {
  const select = document.getElementById('dropdown');
  for (const extension of Object.keys(extensions)) {
    const option = createOption(extension);
    select.appendChild(option);
  }
}

function addOptions(callback) {
  chrome.runtime.onMessage.addListener(function(extensions) {
    receiveMessage(extensions);
  });
  chrome.tabs.executeScript({file: 'addOptions.js'}, callback);
}

function addChangeListener() {
  dropdown.addEventListener('change', () => {
    filterFiles(dropdown.value);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addOptions(addChangeListener);
});
