function openModal() {
  // suchen by ID
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  // suchen by class, also querySelector, wie CSS
  document.querySelector(".overlay").classList.add("hidden");
}
