if (!extensions) { var extensions = {}; }

function getFileExtensions(file) {
  const fileExtensions = file.getElementsByClassName('file-info')[0].textContent.split('.');
  if (fileExtensions.length === 1) { return undefined; } // no extension names
  else { return fileExtensions.splice(1); }
}

Array.from(document.getElementsByClassName('file')).forEach(function(file) {
  const fileExtensions = getFileExtensions(file);
  if (fileExtensions) {
    fileExtensions.forEach(function(extension) {
      extensions[extension.trim()] = true;
    });
  }
});

chrome.runtime.sendMessage(extensions);
