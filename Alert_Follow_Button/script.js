function Counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = Counter();
const counter2 = Counter();
const counter3 = Counter();

const btn1 = document.getElementById("counterbtn1");
const btn2 = document.getElementById("counterbtn2");
const btn3 = document.getElementById("counterbtn3");

btn1.addEventListener("click", () => {
  const val = counter1();
  const username = btn1.parentElement.querySelector("h2").innerText;
  alert(`You started following ${username} ${val} times`);
});

btn2.addEventListener("click", () => {
  const val = counter2();
  const username = btn2.parentElement.querySelector("h2").innerText;
  alert(`You started following ${username} ${val} times`);
});

btn3.addEventListener("click", () => {
  const val = counter3();
  const username = btn3.parentElement.querySelector("h2").innerText;
  alert(`You started following ${username} ${val} times`);
});
