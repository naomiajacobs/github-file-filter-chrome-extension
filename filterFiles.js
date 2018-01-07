Array.from(document.getElementsByClassName('file')).forEach(function(file) {
  if (file.getElementsByClassName('file-info')[0].textContent.includes('.' + extension)) {
    console.log('showing');
    file.style.display = "";
  } else {
    console.log('hiding');
    file.style.display = "none";
  }
});
