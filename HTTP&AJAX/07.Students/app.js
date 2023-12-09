async function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/collections/students";
  const tableBOdy = document.querySelector("tbody");
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", onLoad);

  const getResp = await fetch(baseURL);
  const students = await getResp.json();

  Object.values(students).forEach((student) => {
    rowCreator(student);
  });
  async function onLoad() {
    const [fname, lname, facNum, grade] =
      document.querySelectorAll("#form input");
    let isValid =
      fname.value !== "" &&
      lname.value !== "" &&
      facNum.value !== "" &&
      grade.value !== "";
      if (isValid) {
    const newStudentInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      facNum: facNum.value,
      grade: grade.value,
    };
    await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(newStudentInfo),
    });
   rowCreator(newStudentInfo);

    fname.value = "" ;
      lname.value = "" ;
      facNum.value = "" ;
      grade.value = "";

  }
  }

  function rowCreator(student) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facNum}</td>
            <td>${student.grade}</td>
        </tr>`;
    tableBOdy.appendChild(row);
  }
}

attachEvents();
