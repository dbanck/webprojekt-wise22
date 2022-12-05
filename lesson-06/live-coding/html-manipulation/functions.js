console.log("JS wird ausgeführt!");
let deg = 60;

function machWasCooles() {
  console.log("Mach was cooles!");
  const headline = document.getElementById("headline");

  console.log(headline);
  headline.textContent = "Super spannende Headline";
  headline.style.transform = "rotate(-" + deg + "deg)";
  deg = deg + 60;
}
