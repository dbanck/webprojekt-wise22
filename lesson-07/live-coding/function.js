// Auf Click lauschen auf Thumbnail bilder
function showAsPreview(clickedElement) {
  // .preview-active entfernen
  const oldActive = document.querySelector(".preview-active");
  oldActive.classList.remove("preview-active");

  // .preview-active an geklickte Elemente anfügen
  clickedElement.classList.add("preview-active");

  // Bildquelle und Alternativtext vom geklickten Bild auslesen und auf großes Bild setzen
  const source = clickedElement.src;
  const alt = clickedElement.alt;

  // großes Bild Element auslesen
  const previewElement = document.getElementById("large-preview-image");

  // neue Source und Alternativtext setzen
  previewElement.src = source;
  previewElement.alt = alt;
}

// Auf Click lauschen: auf den Sold out button
function openModal() {
  // modal öffnen: .open ergänzen
  const modal = document.getElementById("modal");
  modal.classList.add("open");
}

// Auf Click lauschen: auf den Schließen-Button
function closeModal() {
  // modal schließen: .open entfernen
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
}

// Auf Eingabe des Nutzers lauschen: Email Feld
// Email-Adresse validieren
function validateEmail() {
  // E-Mail-Eingabe des Nutzers auslesen
  const emailElement = document.getElementById("email-input");
  const email = emailElement.value;

  // validierungslogik
  const hasTopLevelDomain = email.includes(".de") || email.includes(".com");
  const isLongEnough = email.length > 3;

  //   Error Element einlesen
  const errorElement = document.getElementById("error-element");

  //   Submit Button einlesen
  const submitBtn = document.getElementById("submit-btn");

  if (email.includes("@") && hasTopLevelDomain && isLongEnough) {
    errorElement.innerText = "";
    submitBtn.disabled = false;
  } else {
    errorElement.innerText = "Fehlerhafte E-Mail";
    submitBtn.disabled = true;
  }
}
