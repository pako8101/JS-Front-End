function validate() {
  document.getElementById("email").addEventListener("change", onChange);

  function onChange(e) {
    const element = e.currentTarget;
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    pattern.test(element.value)
      ? element.classList.remove("error")
      : element.classList.add("error");

    /* if (pattern.test(element.value)) {
        element.classList.remove('error')
    }else{
        element.classList.add('error')
    }*/
  }

  // Regular expression for a valid email format
  /*  const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    // Remove existing error class
    emailInput.classList.remove("error");

    // Check if the input value matches the valid email format
    if (!emailRegex.test(emailInput.value.toLowerCase())) {
        // If not valid, apply the error class
        emailInput.classList.add("error");
    }*/
}
//document.getElementById("email").addEventListener("change", validate);
