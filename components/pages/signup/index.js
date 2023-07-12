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

/*Extras*/
document.querySelector("#name").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -672,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "222 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

document.querySelector("#blood-group").addEventListener("focus", function (e) {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -700,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "222 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// document.querySelector("#address").addEventListener("focus", function (e) {
//   if (current) current.pause();
//   current = anime({
//     targets: "path",
//     strokeDashoffset: {
//       value: -336,
//       duration: 700,
//       easing: "easeOutQuart",
//     },
//     strokeDasharray: {
//       value: "240 1386",
//       duration: 700,
//       easing: "easeOutQuart",
//     },
//   });
// });
// /*End Extras*/

// document.querySelector("#submit").addEventListener("focus", function (e) {
//   if (current) current.pause();
//   current = anime({
//     targets: "path",
//     strokeDashoffset: {
//       value: -730,
//       duration: 700,
//       easing: "easeOutQuart",
//     },
//     strokeDasharray: {
//       value: "530 1386",
//       duration: 700,
//       easing: "easeOutQuart",
//     },
//   });
// });
