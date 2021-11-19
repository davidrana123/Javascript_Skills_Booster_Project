// let btnShow = document.querySelector("button");
// let output = document.querySelector("h1");

// btnShow.addEventListener("click", () => {
//   let d = new Date();
//   let h = d.getHours();
//   let m = d.getMinutes();
//   let s = d.getSeconds();
//   let D = d.getDate();
//   let M = d.getUTCMonth() + 1;
//   let Y = d.getFullYear();

//   let current_date = `${h} : ${m} : ${s} : ${D} : ${M} : ${Y} `;
//   output.innerHTML = current_date;
// });

// const getTime = () => {
//   let d = new Date();
//   let h = d.getHours();
//   let m = d.getMinutes();
//   let s = d.getSeconds();
//   let D = d.getDate();
//   let M = d.getUTCMonth() + 1;
//   let Y = d.getFullYear();

//   return `${h} : ${m} : ${s} : ${D} : ${M} : ${Y} `;
// };

// const getDate = () => {
//   let d = new Date();
//   let D = d.getDate();
//   let M = d.getUTCMonth();
//   let Y = d.getFullYear();
//   return `${D} : ${M} : ${Y}`;
// };
// document.write(getDate());
// console.log(getDate());
// document.getElementById("date").innerHTML = getDate();

// setInterval(() => {
//   let clock = document.querySelector(".click");
//   clock.innerHTML = getTime();
// }, 1000);

const d = new Date();
// document.getElementById("demo").innerHTML = d;

const D = d.getDate();
const M = d.getMonth() + 1;
const Y = d.getFullYear();
const date = `${D}/${M}/${Y}`;

document.getElementById("date").innerHTML = date;

const time = () => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const amPm = h >= 12 ? "PM" : "AM";
  //   h = h % 12;
  //   h = h == 0 ? 12 : h;
  //   h = h % 12;
  //   h = h == 0 ? 12 : h;

  return `${h}:${m}:${s}:${amPm}`;
  //   document.getElementById("time").innerHTML = time;
};

console.log(time());

setInterval(() => {
  let tim = document.getElementById("time");
  tim.innerHTML = time();
}, 1000);
