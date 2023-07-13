const email = document.getElementById("email");
const pass = document.getElementById("password");
const uname = document.getElementById("name");
const blood_group = document.getElementById("blood_selector");
const rh_selector = document.getElementById("rh-selector");
const submit_form = document.getElementById("submit");
const final_div = document.getElementById("final_reference_div");
const adddress = document.getElementById("address");

function isEmail(eemail) {
  for (var i = 0; i < eemail.length; i++)
    if (eemail.charAt(i) === "@") return true;
  return false;
}

submit.addEventListener("click", () => {
  const user_data = {
    name: uname.value,
    email: email.value,
    password: pass.value,
    blood: blood_group.value,
    rh: rh_selector.value,
    address: adddress.value,
  };

  if (
    !isEmail(email.value) ||
    pass.value.length < 6 ||
    uname.length === 0 ||
    adddress.value.length === 0
  ) {
    alert(
      "! Reminder\n --> All Fields are mandatory\n--> Email should be valid\n--> Password length should not be less than 6"
    );
  } else {
    fetch("http://localhost:5500/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Registration SuccessFull! Please Proceed to Login");
        //window.location.replace('../../../index.html');
      });
  }
});
