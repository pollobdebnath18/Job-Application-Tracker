let interviewList = [];
let rejectedList = [];

const allCardSection = document.getElementById("allCards-section");
const filteredSection = document.getElementById("filtered-section");
const empty = document.getElementById('empty');

const allBtn = document.getElementById("all-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilteredBtn = document.getElementById("rejected-filter-btn");

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
// console.log(allBtn,interviewFilterBtn,rejectedFilteredBtn);

const tot = document.getElementById('tot');
// Count number of interview or rejected
function calculateCount() {
  total.innerText = allCardSection.children.length;
  tot.innerText=allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  console.log(interviewList.length);
}
calculateCount();
//Toggling style
function toggleStyle(id) {
  allBtn.classList.remove("btn-primary");
  interviewFilterBtn.classList.remove("btn-primary");
  rejectedFilteredBtn.classList.remove("btn-primary");

  document.getElementById(id).classList.add("btn-primary");
}

//All Cards Section
allCardSection.addEventListener("click", function (event) {
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
      update,
      description,
      interviewButton,
      rejectedButton,
    };
    const jobExist = interviewList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.company !== cardInfo.company,
    );
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
      update,
      description,
      interviewButton,
      rejectedButton,
    };
    const jobExist = rejectedList.find(
      (item) => item.company === cardInfo.company,
    );
    if (!jobExist) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.company !== cardInfo.company,
    );
    calculateCount();
  }
});
