const modal = document.querySelector("#feedback-modal");
const openBtn = document.querySelector("#feedback-btn");
const closeBtn = document.querySelector("#close-feedback-modal");

openBtn.addEventListener("click", () => {
  modal.showModal();
});

closeBtn.addEventListener("click", () => {
  modal.close();
});