const email = document.getElementById("email");
const pass = document.getElementById("password");
const uname = document.getElementById("name");
const blood_group = document.getElementById("blood_selector");
const rh_selector = document.getElementById("rh-selector");
const submit_form = document.getElementById("submit");
const final_div = document.getElementById("final_reference_div");

submit.addEventListener("click", () => {
  const user_data = {
    name: uname.value,
    email: email.value,
    password: pass.value,
    blood: blood_group.value,
    rh: rh_selector.value,
  };

  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_data),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Registration SuccessFull! Please Proceed to Login");
    });
});
