function fancyStuff() {
  document.getElementById("my-cool-btn").classList.remove("larger");

  document.getElementById("photo").style.transform =
    "rotate(45deg) translateY(130px)";
}

function myFunction() {
  document.getElementById("headline").textContent = "JS rocks 🚀";

  document.getElementById("photo").src =
    "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=400";

  document.getElementById("my-cool-btn").classList.add("larger");

  setTimeout(fancyStuff, 2000);
}
