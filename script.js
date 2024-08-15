const submitFunction = (event) => {
  if (!formValidation()) {
    event.preventDefault();
  } else {
    event.preventDefault();
    alert(
      "The data sent was: \n" +
        "Name: " +
        document.getElementById("name").value +
        "\n" +
        "Lastname: " +
        document.getElementById("lastname").value +
        "\n" +
        "ID: " +
        document.getElementById("id").value +
        "\n" +
        "Mail: " +
        document.getElementById("mail").value +
        "\n" +
        "Age: " +
        document.getElementById("age").value +
        "\n" +
        "Signature: " +
        document.getElementById("signature").value +
        "\n" +
        "Studies: " +
        document.getElementById("studies").value +
        "\n"
    );
  }
};

//event submit
document.getElementById("form").addEventListener("submit", submitFunction); //escuchamos el envio dl form

function formValidation() {
  //text fields validation
  let textFields = document.querySelectorAll("input[type='text']"); //con el query selectorall vamos a seleccionar todos los campos de texto, esto va a ser una coleccion
  let validation = true;

  textFields.forEach((field) => {
    let fieldError = document.getElementById(
      "error" + field.id.charAt(0).toUpperCase() + field.id.slice(1)
    );
    if (field.value.length == "") {
      showError(fieldError, "This field is incomplete.");
      validation = false;
    } else if (field.value.length > 0 && field.value.length < 2) {
      showError(fieldError, "The field must be at least 2 characters.");
      validation = false;
    } else {
      hideError(fieldError);
    }
  });
  //email validation
  const mail = document.getElementById("mail");
  let errorMail = document.getElementById("errorMail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
    hideError(errorMail);
  } else {
    showError(errorMail, "Invalid email.");
    validation = false;
  }

  //age validation
  const age = document.getElementById("age");
  const errorAge = document.getElementById("errorAge");

  if (age.value < 18) {
    showError(errorAge, "You must be over 18 years old to register.");
    validation = false;
  } else {
    hideError(errorAge);
  }

  //signature validation
  const signature = document.getElementById("signature");
  const errorSignature = document.getElementById("errorSignature");

  if (signature.value == "") {
    showError(errorSignature, "Please, select a signature.");
    validation = false;
  } else {
    hideError(errorSignature);
  }

  //studies validation
  const studies = document.getElementById("studies");
  const errorStudies = document.getElementById("errorStudies");
  if (studies.value == "") {
    showError(errorStudies, "Please select your studies.");
    validation = false;
  } else {
    hideError(errorStudies);
  }

  //terms validation

  const terms = document.getElementById("terms");
  const errorTerms = document.getElementById("errorTerms");

  if (!terms.checked) {
    showError(errorTerms, "You must accept the terms and conditions.");
    validation = false;
  } else {
    hideError(errorTerms);
  }

  return validation;
}

const showError = (element, message) => {
  element.textContent = message;
  element.style.display = "block";
};

const hideError = (element) => {
  element.textContent = "";
  element.style.display = "none";
};
