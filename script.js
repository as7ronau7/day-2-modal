const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener('click', () => {
  modal.classList.toggle("hidden")
  openModal.classList.toggle("hidden")
})

closeModal.addEventListener('click', () => {
  modal.classList.toggle("hidden")
  openModal.classList.toggle("hidden")
})
