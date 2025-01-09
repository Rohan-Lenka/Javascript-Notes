const openModalBtn = document.querySelector("#open-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#close-modal-btn");

openModalBtn.addEventListener("click", e => {
    overlay.classList.add("open");
    modal.classList.add("open");
});

closeModalBtn.addEventListener("click", closeModalAndOverlay);

overlay.addEventListener("click", closeModalAndOverlay);

function closeModalAndOverlay() {
    overlay.classList.remove("open");
    modal.classList.remove("open");
}