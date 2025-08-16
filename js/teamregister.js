document.getElementById('uploadBtn').onclick = function() {
  document.getElementById('teamLogo').click();
};

document.getElementById('teamLogo').onchange = function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      document.getElementById('logoPreview').innerHTML = `<img src="${ev.target.result}" alt="Logo" style="max-width:100px;">`;
    };
    reader.readAsDataURL(file);
  }
};

const logoUpload = document.getElementById('logoUpload');
logoUpload.addEventListener('dragover', function(e) {
  e.preventDefault();
  logoUpload.classList.add('dragover');
});
logoUpload.addEventListener('dragleave', function(e) {
  logoUpload.classList.remove('dragover');
});
logoUpload.addEventListener('drop', function(e) {
  e.preventDefault();
  logoUpload.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      document.getElementById('logoPreview').innerHTML = `<img src="${ev.target.result}" alt="Logo" style="max-width:100px;">`;
    };
    reader.readAsDataURL(file);
  }
});