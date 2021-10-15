// get the root element to set property
let root = document.documentElement;

// lets get the value from the sliders and set the new values updating the css variables

function getspace() {
  let space = document.getElementById("space").value;
  root.style.setProperty("--spacing", space + "px");
}

function getcolor() {
  let color = document.getElementById("color").value;
  root.style.setProperty("--base", color);
}

function getblur() {
  let blur = document.getElementById("blur").value;
  root.style.setProperty("--blur", blur + "px");
}

// we use this event listener every time any of these events change
// in this case each time the slider is changed by the user
window.addEventListener("change", (event) => {
  getspace();
  getblur();
  getcolor();
});
