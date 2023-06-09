// Get the containers
const dragContainer = document.querySelector('.drag-container');
const dropContainer = document.querySelector('.drop-container');

const items = document.querySelectorAll('.item');
for(const item of items) {
  item.addEventListener("dragstart", function(e){
    let selected = e.target;

    dropContainer.addEventListener("dragover", function(e){
      e.preventDefault();
    })

    dropContainer.addEventListener("drop", function(e){
      dropContainer.appendChild(selected);
      selected = null;
    })

    dragContainer.addEventListener("dragover", function(e){
      e.preventDefault();
    })

    dragContainer.addEventListener("drop", function(e){
      dragContainer.appendChild(selected);
      selected = null;
    })
  })
}

function displaySuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Item dropped successfully!';
  dropContainer.appendChild(successMessage);
}

function resetContainers() {
  items.forEach(item => {
    item.style.display = 'flex';
    dragContainer.appendChild(item);
  });
}
