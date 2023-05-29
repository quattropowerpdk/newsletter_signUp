const button = document.querySelector(".button");
const emailInput = document.querySelector("#email");
const main = document.querySelector(".main");
const error = document.querySelector(".error");
const registration = document.querySelector(".registration");
const registration_btn = document.querySelector(".registration_button");
const spanEmail = document.querySelector(".span_email");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailInput.value.match(validRegex)) {
    main.classList.add("hidden");
    registration.classList.remove("hidden");
    spanEmail.textContent = emailInput.value;
  } else {
    error.classList.remove("hidden");
  }
});

registration_btn.addEventListener("click", function () {
  main.classList.remove("hidden");
  registration.classList.add("hidden");
  emailInput.value = "";
  error.classList.add("hidden");
});
