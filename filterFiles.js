Array.from(document.getElementsByClassName('file')).forEach(function(file) {
  if (file.getElementsByClassName('file-info')[0].textContent.includes('.' + extension)) {
    file.style.display = "";
  } else {
    file.style.display = "none";
  }
});
