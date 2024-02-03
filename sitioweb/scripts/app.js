"use scrict";
const buscando = document.getElementById("buscando");
const inputBuscar = document.getElementById("input_buscar");

const fragment = new DocumentFragment();
const btnEnviar = document.getElementById("btnSend");
btnEnviar.setAttribute("type", "button");

const form = document.getElementById("form");

const formValid = {
  nombres: false,
  Apellidos: false,
  mail: false,
  celphone: false,
  politica: false,
};

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
});

const validInputForm = () => {
  const validInputForm = (Object) => {
    let response = values.finIndex((e) => e === false);
    return response;
  };
};
form.addEventListener("change", (e) => {
  const inputId = e.target.id;
  console.log(inputId);
  const valueInput = e.target.value;
  console.log(valueInput);
  const classInput = e.target.classList;
  console.log(classInput);
  const isValidClass = () => {
    classInput.add("is-valid");
    classInput.remove("is-invalid");
  };
  const isInValidClass = () => {
    classInput.remove("is-valid");
    classInput.add("is-invalid");
  };
  switch (inputId) {
    case "names":
      const nombresRx =
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,40})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
      formValid.nombres = valueInput.match(nombresRx) ? true : false;
      formValid.nombres ? isValidClass() : isInValidClass();
      console.log(Object.values(formValid));
      break;
    case "lastNames":
      const lastNamesRx =
        /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,30})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,30})$/g;
      formValid.Apellidos = valueInput.match(lastNamesRx) ? true : false;
      formValid.Apellidos ? isValidClass() : isInValidClass();
      console.log(Object.values(formValid));
      break;
    case "mail":
      const mailRx =
        /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
      formValid.mail = valueInput.match(mailRx) ? true : false;
      formValid.mail ? isValidClass() : isInValidClass();
      console.log(Object.values(formValid));
      break;
    case "celphone":
      const celphoneRx = /^[0-9]{10,13}/; // Esto permite 10 o más dígitos numéricos
      formValid.celphone = valueInput.match(celphoneRx) ? true : false;
      formValid.celphone ? isValidClass() : isInValidClass();
      console.log(object.values(formValid));
      break;
  }
});
buscando.addEventListener("click", () => {
  if (inputBuscar.classList.contains("buscarOculto")) {
    inputBuscar.classList.remove("buscarOculto");
    inputBuscar.classList.add("buscarVisible");
  } else if (inputBuscar.classList.contains("buscarVisible")) {
    inputBuscar.classList.remove("buscarVisible");
    inputBuscar.classList.add("buscarOculto");
  }
});
