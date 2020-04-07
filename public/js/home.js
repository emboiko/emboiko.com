const text = document.getElementById("front-matter-text");

const texts = [
    "Fullstack Developer",
    "Consultant",
    "Software Engineer",
    "Innovator",
    "Problem Solver",
    "Programmer",
]

let i=1;
setInterval(() => {
    if (i > 5) i=0;
    text.textContent = texts[i];
    i++;
}, 2000);

