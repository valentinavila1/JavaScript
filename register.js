const Form = document.getElementById("formulario");
const InputName = document.getElementById("name");
const InputPass = document.getElementById("password");
const InputPhone = document.getElementById("phone");
const InputEmail = document.getElementById("email");
const InputSubmit = document.getElementById("register");
const InputDiv = document.querySelector(".form__input");

const users = JSON.parse(localStorage.getItem("users")) || [];
const saveLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

// funcion inicial
const init = () => {
  InputName.addEventListener("input", () => CheckImputs(InputName));
  InputEmail.addEventListener("input", () => CheckEmails(InputEmail));
  InputPass.addEventListener("input", () => CheckPass(InputPass));
  InputPhone.addEventListener("input", () => CheckPhone(InputPhone));
  Form.addEventListener("submit", () => CheckForm(Form));
};
init();

// checkear imputs
const CheckImputs = (input) => {
  let valid = false;
  const Min = 3;
  const Max = 25;
  if (EmptyInput(input)) {
    ErrorImput(input, "El nombre es obligatorio");
    return;
  }
  if (!MinMaxCharacters(input, Min, Max)) {
    ErrorImput(input, `Este campo debe tener entre ${Min} y ${Max} caracteres`);
    return;
  }
  SuccessImput(input);
  valid = true;
  return valid;
};

// checkear emails
const CheckEmails = (input) => {
  let valid = false;
  if (EmptyInput(input)) {
    ErrorImput(input, "El email es obligatorio");
    return;
  }
  if (!ValidEmail(input)) {
    ErrorImput(input, "El email no es válido");
    return;
  }

  if (ExistingEmails(input)) {
    ErrorImput(input, "El email que ingresaste ya existe");
    return;
  }

  SuccessImput(input);

  valid = true;
  return valid;
};

// checkear passwords
const CheckPass = (input) => {
  let valid = false;
  const min = 8;
  const max = 16;
  if (EmptyInput(input)) {
    ErrorImput(input, "Ingresá una contraseña");
    return;
  }
  if (!MinMaxCharacters(input, min, max)) {
    ErrorImput(
      input,
      `La contraseña debe tener entre ${min} y ${max} caracteres`
    );
    return;
  }

  if (!ValidPass(input)) {
    ErrorImput(
      input,
      "La contraseña debe tener al menos un dígito, una mayúscula y un símbolo"
    );
    return;
  }

  SuccessImput(input);
  valid = true;
  return valid;
};

// checkear telefonos
const CheckPhone = (input) => {
  let valid = false;
  const minimo = 9;
  const maximo = 12;
  if (!ValidPhone) {
    ErrorImput(input, "El número ingresado no es correcto");
    return;
  }
  if (!MinMaxCharacters(input, minimo, maximo)) {
    ErrorImput(input, `Colocá entre ${minimo} y ${maximo} caracteres`);
    return;
  }

  if (EmptyInput(input)) {
    ErrorImput(input, "Ingresá un número");
    return;
  }

  SuccessImput(input);
  valid = true;
  return valid;
};

// checkear el form
const CheckForm = () => {
  // El preventdefault me reinicia y no logea ???
  let isValidName = CheckImputs(InputName);
  let isValidEmail = CheckEmails(InputEmail);
  let isValidPass = CheckPass(InputPass);
  let isValidPhone = CheckPhone(InputPhone);

  let FormValid = isValidName && isValidEmail & isValidPass && isValidPhone;
  if (FormValid) {
    users.push({
      name: InputName.value,
      Email: InputEmail.value,
      Password: InputPass.value,
      Phone: InputPhone.value,
    });
    saveLocalStorage(users);
    alert("Te registraste perfecto");
    window.location.href = "login.html";
  } else {
    alert("Llená todo el formulario!");
  }
};

// ------------------------------------------------------------------------- //

// funcion para controlar el campo
const EmptyInput = (input) => {
  return !input.value.trim().length;
};

// funcion para implementar los caracteres máx y min
const MinMaxCharacters = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

// funcion para mostrar el error
const ErrorImput = (input, message) => {
  InputDiv.classList.add("error");
  InputDiv.classList.remove("success");
  const InputSmall = InputDiv.querySelector("small"); // el queryselector acá solo toma el primero ???
  InputSmall.style.display = "flex";
  InputSmall.textContent = message;
};

const SuccessImput = (input) => {
  InputDiv.classList.remove("error");
  InputDiv.classList.add("success");
  const ImputSmall = InputDiv.querySelector("small");

  ImputSmall.textContent = "";
  // console.log(ImputSmall);
};

// validar email
const ValidEmail = (input) => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  return re.test(input.value.trim());
};

// emails existentes
const ExistingEmails = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

// validar pass
const ValidPass = (input) => {
  const reg =
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  return reg.test(input.value.trim());
};

//validar numero de tel
const ValidPhone = (input) => {
  const reg = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
  return reg.test(input.value.trim());
};