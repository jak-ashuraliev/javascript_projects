const reviews = [
    {
        id: 1,
        name: "John Smith",
        jobTitle: "Web Developer",
        img: "https://res.cloudinary.com/dff3cygyw/image/upload/v1648431950/person2-male_vdqbpt.png",
        bio: "Lorem ipsum dolor, sit amet consectetur elit. Pariatur itaque saepe in sint nemo obcaecati deleniti cupiditate voluptatibus, atque enim."
    },
    {
        id: 2,
        name: "Jessica Smith",
        jobTitle: "UX Designer",
        img: "https://res.cloudinary.com/dff3cygyw/image/upload/v1648431950/person3-female_ladp1k.png",
        bio: "Lorem ipsum dolor, sit adipisicing elit. Pariatur itaque saepe in sint nemo obcaecati deleniti cupiditate voluptatibus, atque enim."
    },
    {
        id: 3,
        name: "Robert Smith",
        jobTitle: "Project Manager",
        img: "https://res.cloudinary.com/dff3cygyw/image/upload/v1648431950/person1-male_fzia6v.png",
        bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur itaque saepe in sint nemo obcaecati deleniti cupiditate voluptatibus, atque enim."
    },
    {
        id: 4,
        name: "Sara Smith",
        jobTitle: "Scrum Master",
        img: "https://res.cloudinary.com/dff3cygyw/image/upload/v1648431950/person4-female_cewvdt.png",
        bio: "Lorem ipsum dolor, sit amet adipisicing elit. Pariatur itaque saepe in sint nemo obcaecati deleniti cupiditate voluptatibus, atque enim."
    },
];

// select profile img, author, job title and bio. 
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const bio = document.getElementById("bio");

// select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// default starting item / review
let currentItem = 0;

// load initial item on window load
window.addEventListener('DOMContentLoaded', function() {
    displayReview(currentItem);
});

// function to show reviews based on item
function displayReview(review) {
    const item = reviews[review];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.jobTitle;
    bio.textContent = item.bio;
};

// show next review
nextBtn.addEventListener('click', function() {
    currentItem ++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    } 
    displayReview(currentItem);
});

// show previous review
prevBtn.addEventListener('click', function() {
    currentItem --;
    if (currentItem < 0 ) {
        currentItem = reviews.length - 1;
    } 
    displayReview(currentItem);
});

// show random reviews
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    displayReview(currentItem);
});