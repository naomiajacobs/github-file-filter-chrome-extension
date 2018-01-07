function filterFiles(extension) {
  console.log('extension is: ', extension);
  chrome.tabs.executeScript({
      code: 'var extension = "' + extension + '";'
  }, function() {
      chrome.tabs.executeScript({file: 'filterFiles.js'});
  });
}

document.addEventListener('DOMContentLoaded', () => {
  var dropdown = document.getElementById('dropdown');

  dropdown.addEventListener('change', () => {
    console.log('selected item');
    filterFiles(dropdown.value);
  });
});
