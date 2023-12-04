function lockedProfile() {
  const buttons = Array.from(document.getElementsByTagName("button"));

  buttons.forEach((button) => {
    button.addEventListener("click", showMoreInfo);
  });

  function showMoreInfo(e) {
    let btn = e.currentTarget;
    let profile = btn.parentElement;
    let children = profile.children;

    let unlocked = children[4];
    let additionalInfo = children[9];
    if (!unlocked.checked) {
      return;
    }
    if (btn.textContent === "Show more") {
      additionalInfo.style.display = "block";
      btn.textContent = "Hide it";
    } else if (btn.textContent === "Hide it") {
      additionalInfo.style.display = "none";
      btn.textContent = "Show more";
    }
  }

  /*const button = Array.from(document.querySelectorAll("button"));

  button.forEach((button) => {
    button.addEventListener("click", handleClick);
    });
    
    function handleClick(e) {
        const lockedRadioButton = e.currentTarget.parentElement.querySelector(
            'input[type="radio"]'
          );

      if (
    lockedRadioButton.checked) {
        return;
      }
      const isHidden = e.currentTarget.textContent === 'Show more';
      const hiddenInfo = e.currentTarget.parentElement.querySelector("div");

       hiddenInfo.style.display = isHidden ? "block" : 'none';
       
         e.currentTarget.textContent = isHidden ? 'Hide it' :'Show more';
     
    }*/
}
