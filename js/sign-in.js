const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password");



// user name Validtion
function checkName() {
  if (!nameInput.value !== "" && nameInput.value.length < 4) {
    return nameField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
  }
  nameField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
  }


const eye = document.querySelectorAll(".show-hide")
eye.forEach((eye) => {
  eye.addEventListener("click" , () => {
    const passInbut = eye.parentElement.querySelector("input");
    if (passInbut.type === "password") {
      eye.classList.replace("bx-hide", "bx-show")
      return (passInbut.type = "text");
    }else {
      eye.classList.replace("bx-show", "bx-hide");
      passInbut.type = "password"
    };
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}


// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkName();
  createPass();


  //calling function on key up
  nameInput.addEventListener("keyup", checkName);
  passInput.addEventListener("keyup", createPass);

  if (
    !nameField.classList.contains("invalid") &&
    !passField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});










































