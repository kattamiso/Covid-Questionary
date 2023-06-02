const nameError = document.querySelector("#name-error");
const surnameError = document.querySelector("#surname-error");
const emailError = document.querySelector("#email-error");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");

let trySubmit = false;

const nameCheckFunc = () => {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "The name field mustn't be empty";
        return false
    }

    if (!(nameInput.value.trim().length > 1)) {
        nameError.textContent = "The name field must contain at least 2 symbols";
        return false
    }

        nameError.textContent = "";
        return true
}


const surnameCheckFunc = () => {
    if (surnameInput.value.trim() === "") {
        surnameError.textContent = "The surname field mustn't be empty";
        return false
    }

    if (!(surnameInput.value.trim().length > 1)) {
        surnameError.textContent = "The surname field must contain at least 3 symbols";
        return false
    }
        surnameError.textContent = "";
        return true
}


const emailCheckFunc = () => {
    if (emailInput.value.includes === "") {
        emailError.textContent = "The email field mustn't be empty";
        return false
    }

    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        emailError.textContent = "This field must fulfill email form requirements";
        return false
    }

    if (!emailInput.value.endsWith("@redberry.ge")) {
        emailError.textContent = "must finish with the '@redberry.ge'";
        return false;
    }

        emailError.textContent = "";
        return true
}


nameInput.addEventListener("input", () => {
  if (trySubmit) {
    nameCheckFunc();
  }
});

surnameInput.addEventListener("input", () => {
  if (trySubmit) {
    surnameCheckFunc();
  }
});

emailInput.addEventListener("input", () => {
  if (trySubmit) {
    emailCheckFunc();
  }
});

const onNextPage = () => {
  if (!trySubmit) {
    trySubmit = true;
  }
  const nameStatus = nameCheckFunc();
  const surnameStatus = surnameCheckFunc();
  const emailStatus = emailCheckFunc();

  if (nameStatus && surnameStatus && emailStatus) {
    document.location.href = "../Covid/covid.html";
  }
};
