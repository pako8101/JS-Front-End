function attachEventsListeners() {
  let [inputDistance, button, outputDistance] =
    document.getElementsByTagName("input");
  let [inputOption, outputOption] = document.getElementsByTagName("select");

  let rates = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    ml: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  button.addEventListener("click", () => {
    debugger;
    let distance = inputDistance.value;
    let inputUnits = inputOption.value;
    let outputUnits = outputOption.value;

    let result = (distance * rates[inputUnits]) / rates[outputUnits];
    outputDistance.value = result;
  });
}
