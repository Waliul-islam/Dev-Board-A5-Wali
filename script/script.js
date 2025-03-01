// move to blog.html
document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "./blogs.html";
});

// adding alert
const btns = document.querySelectorAll(".completed-btn");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    alert("Board Updated Successfully.");
  });
}

// completed button actions
let taskCount = document.getElementById("task-count");
let completedCount = document.getElementById("completed-count");
let updatedTaskCount = 6;
let updatedCompletedCount = 23;

for (let btn of btns) {
  btn.addEventListener("click", function (event) {
    if (updatedTaskCount > 0) {
      updatedTaskCount = updatedTaskCount - 1;
      updatedCompletedCount = updatedCompletedCount + 1;
      taskCount.innerHTML = updatedTaskCount.toString().padStart(2, "0");
      completedCount.innerHTML = updatedCompletedCount
        .toString()
        .padStart(2, "0");

      const clickedBtn = event.target;
      clickedBtn.classList.remove("bg-[#3752FD]");
      clickedBtn.classList.add("bg-gray-300", "cursor-not-allowed");

      if (updatedTaskCount === 0) {
        alert("Congrats!! You have completed all the current task.");
      }
    }
  });
}
// activity log actions
for (let btn of btns) {
  btn.addEventListener("click", function (event) {
    const parent = event.target.closest(".card");
    const paraElement = parent.querySelector(".topic");
    const paraText = paraElement.innerText;
    const time = new Date().toLocaleTimeString();

    const data = document.createElement("p");
    data.innerText = `You have successfully completed ${paraText} at ${time}`;
    data.classList.add("bg-gray-100", "p-2", "rounded-lg");
    const activityLog = document.getElementById("activity-log");
    activityLog.appendChild(data);
  });
}

// clear history button
const clearBtn = document.getElementById("clear-btn");
const activityLog = document.getElementById("activity-log");
clearBtn.addEventListener("click", function () {
  activityLog.innerHTML = "";
})

// adding dynamic day
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date().getDay();
const updatedDay = document.getElementById("day");
updatedDay.innerText = days[today];

// adding dynamic date
const date = new Date();
const options = { month: "short", day: "2-digit", year: "numeric" };
const updatedDate = date.toLocaleDateString("en-US", options).replace(",", "");
document.getElementById("date-count").innerText = updatedDate;

// color changing btn
const colorBtn = document.getElementById("color-btn");
colorBtn.addEventListener("click", function () {
  let colors = ["purple", "tomato", "pink", "lime", "amber", "teal", "cyan"];
  let randomcolor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("body").style.backgroundColor = randomcolor;
});
