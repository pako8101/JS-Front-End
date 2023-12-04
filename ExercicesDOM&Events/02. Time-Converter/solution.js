function attachEventsListeners() {
  const days = document.querySelector("#days");
  const daysButton = document.querySelector("#daysBtn");

  const hours = document.querySelector("#hours");
  const hoursButton = document.querySelector("#hoursBtn");

  const minutes = document.querySelector("#minutes");
  const minutesButton = document.querySelector("#minutesBtn");

  const seconds = document.querySelector("#seconds");
  const secondsButton = document.querySelector("#secondsBtn");

  daysButton.addEventListener("click", daysConverter);
  hoursButton.addEventListener("click", hoursConvert);
  minutesButton.addEventListener("click", minutesConvert);
  secondsButton.addEventListener("click", secondsConverter);

  function daysConverter() {
    hours.value = days.value * 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }

  function hoursConvert() {
    days.value = hours.value / 24;
    minutes.value = hours.value * 60;
    seconds.value = minutes.value * 60;
  }
  function minutesConvert() {

     hours.value   = minutes.value / 60;
     days.value = hours.value / 24;
    seconds.value = minutes.value * 60;
  }

  function secondsConverter() {
    minutes.value = seconds.value / 60;
     hours.value   = minutes.value / 60;
     days.value = hours.value / 24;
  }
}
