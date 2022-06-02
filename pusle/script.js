checkbox.addEventListener("click", (event) => {
  if (checkbox.classListener.contains("on")) {
    checkbox.setAtribute("aria-checked", "false");
  } else {
    checkbox.setAtribute("aria-checked", "true");
  }
  checkbox.classList.toggle("on");
});
