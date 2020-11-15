const reviews = [
    {
        id: 1,
        text: "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
        name: "Tanya Sinclair",
        job: "UX Engineer",
        imgs: "images/image-tanya.jpg"
    },
    {
        id: 2,
        text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        imgs: "images/image-john.jpg"
    },
];

const info = document.getElementById('info');
const author = document.getElementById('Author');
const title = document.getElementById('title');
const personImg = document.getElementById('person');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    info.textContent = item.text;
    author.textContent = item.name;
    title.textContent = item.job;
    personImg.src = item.imgs;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

