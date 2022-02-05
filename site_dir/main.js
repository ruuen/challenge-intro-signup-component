const form = document.querySelector(".signup__form");

// CSS class names for input, error icon, and error msg selections
const classErrorInputBorder = "signup__input--invalid";
const classErrorIcon = "signup__input-container--invalid";
const classErrorMsg = "signup__input-error--visible";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let index = 0; index < form.length - 1; index++) {
    const fieldValidity = form[index].checkValidity();

    if (fieldValidity) {
      hideFieldErrors(form[index].name);
    }

    if (!fieldValidity) {
      showFieldErrors(form[index].name);
    }
  }

  if (!form.checkValidity()) {
    return;
  }

  form.submit();
});

// fieldName maps to data-field on HTML elements
function showFieldErrors(fieldName) {
  const targetInput = document.querySelector(`.signup__input[data-field=${fieldName}]`);
  const targetInputContainer = document.querySelector(`.signup__input-container[data-field=${fieldName}]`);
  const targetInputErrorMsg = document.querySelector(`.signup__input-error[data-field="${fieldName}"]`);

  targetInput.classList.add(classErrorInputBorder);
  targetInputContainer.classList.add(classErrorIcon);
  targetInputErrorMsg.classList.add(classErrorMsg);
}

// fieldName maps to data-field on HTML elements
function hideFieldErrors(fieldName) {
  const targetInput = document.querySelector(`.signup__input[data-field=${fieldName}]`);
  const targetInputContainer = document.querySelector(`.signup__input-container[data-field=${fieldName}]`);
  const targetInputErrorMsg = document.querySelector(`.signup__input-error[data-field="${fieldName}"]`);

  targetInput.classList.remove(classErrorInputBorder);
  targetInputContainer.classList.remove(classErrorIcon);
  targetInputErrorMsg.classList.remove(classErrorMsg);
}
