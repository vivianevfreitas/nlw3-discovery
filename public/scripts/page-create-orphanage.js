// create map
const map = L.map('mapid').setView([-20.3853452, -43.5035672], 15);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add the photo field
function addPhotoField() {
  // take container photo #images
  const container = document.querySelector('#images');

  // take container to duplicate .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // clone the last image added
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // check if the field is empty, if yes, do not add it to the image container
  const input = newFieldContainer.children[0];

  if (input.value == '') {
    return;
  }

  // clear the field before adding it to the image container
  input.value = '';

  // add the clone to the image container
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length <= 1) {
    // clear the field value
    span.parentNode.children[0].value = '';
    return;
  }

  // delete the field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove the class .active (from the buttons)
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

  // put class .active on that clicked button
  const button = event.currentTarget;
  button.classList.add('active');

  // update my hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  // validade if lat and lng are none
  const latValidate = document.querySelector('[name="lat"]');
  const lngValidate = document.querySelector('[name="lng"]');

  if (latValidate.value && lngValidate.value !== '') {
    return;
  } else {
    event.preventDefault();
    alert('Selecione um local no mapa.');
  }
}
