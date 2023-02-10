const reviews = [
  {
    id: 1,
    name: "joe doe 1",
    job: "web developer 1 ",
    img: "https://raw.githubusercontent.com/Kingbond470/Javascript-Project/master/Page%20Review/image/team1.jpg",
    text: "description 1 "
  },
  {
    id: 2,
    name: "joe doe 2",
    job: "web developer 2 ",
    img: "https://raw.githubusercontent.com/Kingbond470/Javascript-Project/master/Page%20Review/image/team2.jpg",
    text: "description 2 "
  },

  {
    id: 3,
    name: "joe doe 3",
    job: "web developer 3 ",
    img: "https://raw.githubusercontent.com/Kingbond470/Javascript-Project/master/Page%20Review/image/team3.jpg",
    text: "description 3 "
  },
  {
    id: 4,
    name: "joe doe 4",
    job: "web developer 4 ",
    img: "https://raw.githubusercontent.com/Kingbond470/Javascript-Project/master/Page%20Review/image/team4.jpg",
    text: "description 4 "
  },



];


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");



const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;


});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

}

nextBtn.addEventListener("click", function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
})

prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;

  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function() {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem)
})