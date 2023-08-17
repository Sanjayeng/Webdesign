const customText = document.getElementById('custom-text');
const tshirtColor = document.getElementById('tshirt-color');
const customTextPreview = document.getElementById('custom-text-preview');
const previewContainer = document.getElementById('preview');

customText.addEventListener('input', function () {
  customTextPreview.innerText = customText.value;
});

tshirtColor.addEventListener('input', function () {
  previewContainer.style.backgroundColor = tshirtColor.value;
});
