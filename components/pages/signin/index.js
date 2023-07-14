var current = null;
document.querySelector("#email").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#password").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
document.querySelector("#submit").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

const email = document.getElementById("email");
const pass = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  localStorage.removeItem("token");
  if (email.value.length === 0 || pass.value.length === 0) {
    alert("Email and Password Cannot be left Blank !");
  } else {
    fetch("http://localhost:8080/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const item = data.find(
          (el) => el.email === email.value && el.password === pass.value
        );
        console.log(item);
        if (item === undefined) {
          alert("User Does Not Exist! Please Create an account");
        } else {
          const token = JSON.stringify(Date.now());
          localStorage.setItem("token", token);
          localStorage.setItem("id", item.id);
          window.location.href = "./LandingPage/index.html";
        }
      });
  }
});
