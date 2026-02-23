let interviewList = [];
let rejectedList = [];
let stat = "all-btn";

const mainContainer = document.querySelector("main");
const allCardSection = document.getElementById("allCards-section");
const filteredSection = document.getElementById("filtered-section");
const empty = document.getElementById("empty");
const deleteCard = document.querySelector(".delete");

const allBtn = document.getElementById("all-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilteredBtn = document.getElementById("rejected-filter-btn");

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
// console.log(allBtn,interviewFilterBtn,rejectedFilteredBtn);

const tot = document.getElementById("tot");
// Count number of interview or rejected
function calculateCount() {
  total.innerText = allCardSection.children.length;
  tot.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  // console.log(stat);
  if (stat === "all-btn") {
    tot.innerText = allCardSection.children.length;
  } else if (stat === "interview-filter-btn") {
    tot.innerText = interviewList.length;
  } else if (stat === "rejected-filter-btn") {
    tot.innerText = rejectedList.length;
  }
}
calculateCount();
//Toggling style
function toggleStyle(id) {
  allBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectedFilteredBtn.classList.remove("btn-primary");

  document.getElementById(id).classList.add("btn-primary");
  stat = id;
  if (id == "all-btn") {
    if (total.length === 0) {
      empty.classList.remove("hidden");
      filteredSection.classList.add("hidden");
      allCardSection.classList.add("hidden");
      // tot.innerText=total.length;
    } else {
      filteredSection.classList.add("hidden");
      allCardSection.classList.remove("hidden");
      empty.classList.add("hidden");
      // tot.innerText = total.length;
    }
  }
  if (id == "interview-filter-btn") {
    if (interviewList.length === 0) {
      // console.log("this is empty");
      empty.classList.remove("hidden");
      filteredSection.classList.add("hidden");
      allCardSection.classList.add("hidden");
      // tot.innerText = 0;
    } else {
      empty.classList.add("hidden");
      filteredSection.classList.remove("hidden");
      allCardSection.classList.add("hidden");
      // tot.innerText = interviewList.length;
      renderInterview();
    }
  }
  if (id == "rejected-filter-btn") {
    if (rejectedList.length === 0) {
      empty.classList.remove("hidden");
      filteredSection.classList.add("hidden");
      allCardSection.classList.add("hidden");
      // tot.innerText = 0;
    } else {
      empty.classList.add("hidden");
      filteredSection.classList.remove("hidden");
      allCardSection.classList.add("hidden");
      // tot.innerText = rejectedList.length;
      renderRejected();
    }
  }
  calculateCount();
}

//All Cards Section
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const company = parentNode.querySelector(".company").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const update = parentNode.querySelector(".update").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const interviewButton =
      parentNode.querySelector(".interview-btn").innerText;
    const rejectedButton = parentNode.querySelector(".rejected-btn").innerText;
    parentNode.querySelector(".update").innerText = "InterView";

    const cardInfo = {
      company,
      position,
      location,
      update: "InterView",
      description,
      interviewButton,
      rejectedButton,
    };
    const jobExist = interviewList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!jobExist) {
      //   cardInfo.update.innerText='InterView';
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.company !== cardInfo.company,
    );
    if (stat === "rejected-filter-btn") {
      renderRejected();
    }
    calculateCount();

    // console.log(interviewList.length);
  }
  if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const company = parentNode.querySelector(".company").innerText;
    const position = parentNode.querySelector(".position").innerText;
    const location = parentNode.querySelector(".location").innerText;
    const update = parentNode.querySelector(".update").innerText;
    const description = parentNode.querySelector(".description").innerText;
    const interviewButton =
      parentNode.querySelector(".interview-btn").innerText;
    const rejectedButton = parentNode.querySelector(".rejected-btn").innerText;
    parentNode.querySelector(".update").innerText = "Rejected";
    const cardInfo = {
      company,
      position,
      location,
      update: "Rejected",
      description,
      interviewButton,
      rejectedButton,
    };
    const jobExist = rejectedList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!jobExist) {
      cardInfo.update = "Rejected";
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.company !== cardInfo.company,
    );
    if (stat === "interview-filter-btn") {
      renderInterview();
    }
    calculateCount();
  }
  // for delete item
  if (event.target.classList.contains("delete")) {
    const parentNode = event.target.parentNode.parentNode;
    const card = event.target.closest(".space-y-6");
    const company = parentNode.querySelector(".company").innerText;
    // console.log(company);
    interviewList = interviewList.filter((item) => item.company !== company);
    rejectedList = rejectedList.filter((item) => item.company !== company);

    card.remove();
    if (stat === "interview-filter-btn") {
      renderInterview();
    }
    if (stat === "rejected-filter-btn") {
      renderRejected();
    }
    calculateCount();
  }
});

// Render Interview Section
function renderInterview() {
  filteredSection.innerHTML = "";
  for (const interview of interviewList) {
    // console.log(interview);
    const div = document.createElement("div");
    div.className = "space-y-6 pt-4 bg-gray-100 p-5 mb-10";
    div.innerHTML = `
  <div class="flex justify-between items-center">
            <div>
              <h1 class="company text-xl font-bold">${interview.company}</h1>
              <p class="position text-sm">${interview.position}</p>
            </div>
            <div>
              <i class="fa-regular fa-trash-can cursor-pointer"></i>
            </div>
          </div>
          <div>
            <h1 class="location">Remote • Full-time • $130,000 - $175,000</h1>
          </div>
          <div>
            <span class="bg-[#EEF4FF] p-3 update">${interview.update}</span>

            <p class="description pt-3">
              ${interview.description}
            </p>
          </div>
          <div class="flex gap-4">
            <button class="interview-btn btn text-[#10B981] border-[#10B981]">
              Interview
            </button>
            <button class="rejected-btn btn text-[#EF4444] border-[#EF4444]">
              Rejected
            </button>
          </div>
  `;
    filteredSection.appendChild(div);
  }
}

// Render Rejected Section
function renderRejected() {
  filteredSection.innerHTML = "";
  for (const reject of rejectedList) {
    const div = document.createElement("div");
    div.className = "space-y-6 pt-4 bg-gray-100 p-5 mb-10";
    div.innerHTML = `
  <div class="flex justify-between items-center">
            <div>
              <h1 class="company text-xl font-bold">${reject.company}</h1>
              <p class="position text-sm">${reject.position}</p>
            </div>
            <div>
              <i class="fa-regular fa-trash-can cursor-pointer"></i>
            </div>
          </div>
          <div>
            <h1 class="location">Remote • Full-time • $130,000 - $175,000</h1>
          </div>
          <div>
            <span class="bg-[#EEF4FF] p-3 update">${reject.update}</span>

            <p class="description pt-3">
              ${reject.description}
            </p>
          </div>
          <div class="flex gap-4">
            <button class="interview-btn btn text-[#10B981] border-[#10B981]">
              Interview
            </button>
            <button class="rejected-btn btn text-[#EF4444] border-[#EF4444]">
              Rejected
            </button>
          </div>
  `;
    filteredSection.appendChild(div);
  }
}
