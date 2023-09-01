const form = document.querySelector("form"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password");

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
  createPass();


  //calling function on key up
  passInput.addEventListener("keyup", createPass);

  if (
    !passField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});








































