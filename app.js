const inputs = document.querySelectorAll("input")
const password = document.querySelector("#password")
const confPassword = document.querySelector("#confPassword")
const email = document.getElementById("email")
const form = document.querySelector("form")

const empError = document.createElement("h3")
empError.style.color = "red";
empError.style.marginLeft = "3em"

const btn = document.querySelector("button")



btn.addEventListener("click", (e) => {
    empError.remove()
    e.preventDefault()
    emptyError()
    validateEmail(email.value)
    comparePassword(password.value, confPassword.value)
})

// email validation using regex
const validateEmail = (email) => {
    const result = email
      .toLowerCase()
      .match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      );

      if(result == null && email.length > 0) {
            empError.innerText = "email is invalid"
            form.before(empError)
      }
  };

  function emptyError() {
    inputs.forEach((input) => {
        if(input.value === "") {
            empError.innerText = "All fields are mandatory"
            form.before(empError)
        }
    })
}

const comparePassword = (password, comparePassword) => {
    if(password.length > 0 && password.length < 5) {
        empError.innerText = "Password must be 6 character long"
        form.before(empError)
    }
    if(password != comparePassword && password.length >= 6) {
        empError.innerText = "password & compare password doesn't match"
        form.before(empError)
    }
}
