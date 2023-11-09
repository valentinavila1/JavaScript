const FormCompleto = document.getElementById("formulario");
const EmailInput = document.getElementById("input-email");
const PassInput = document.getElementById("input-pass");
const PassError = document.getElementById("error");

// console.log(PassError);
//console.log(PassInput, PassError, Form);

const users = JSON.parse(localStorage.getItem("users")) || [];
//console.log("Usuarios registrados LS:", users);

const saveSessionStorage = (user) => {
  sessionStorage.setItem("activeuser", JSON.stringify(user));
};

// input vacio
const EmptyInput = (input) => {
  return !input.value.trim().length;
};

// email existente
const ExistingEmails = (input) => {
  const email = input.value.trim();
  // console.log("Email a buscar:", email);

  const userExists = users.some((user) => {
    // console.log(`Comparo: ${user.email} con ${email}`);
    return user.email === email;
  });

  return userExists;
};

// pass existente

const MatchPassword = (input) => {
  const user = users.find((user) => user.email === EmailInput.value.trim());

  return user.password === input.value.trim();
}; // Los datos del LS estaban en MAYUSCULA y acá en Minúscula

const msgError = (msg) => {
  PassError.textContent = msg;
  PassError.style.display = "block";
};

// console.log(MatchPassword());

// ------------------------------------------------------------------- //

const ValidAccount = () => {
  let valid = false;

  if (EmptyInput(EmailInput)) {
    msgError("Ingresá tu usuario, por favor");
    return;
  }

  if (EmptyInput(PassInput)) {
    msgError("Ingresá la contraseña, por favor");
    return;
  }

  if (!ExistingEmails(EmailInput)) {
    msgError("El email no es válido");
    return;
  }

  if (!MatchPassword(PassInput)) {
    msgError("La contraseña no es correcta");
    FormCompleto.reset();

    return;
  }

  valid = true;
  msgError.textContent = "";
  return valid;
};

/* const usersSS = (input) => {
  //const user = users.find((user) => user.email === EmailInput.value.trim());

  //return user === input.value.trim();
};  */

const login = (e) => {
  e.preventDefault();
  console.log(users.find((user) => user.email === EmailInput.value));
  if (ValidAccount()) {
    const user = users.find((user) => user.email === EmailInput.value.trim());
    saveSessionStorage(user);
    alert("Bienvenido a Milo!");
    window.location.href = "../index.html";
  }
};

const init = () => {
  FormCompleto.addEventListener("submit", login);
};
init();
