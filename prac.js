const words = ["Cybersecurity Researcher", "Ethical Hacker", "Bug Bounty Hunter", "Penetration Tester"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];
    document.querySelector(".typing").textContent = isDeleting
        ? currentWord.substring(0, j--)
        : currentWord.substring(0, j++);

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", () => type());
document.addEventListener("DOMContentLoaded", function () {
const timelineItems = document.querySelectorAll(".timeline-item");
function showTimelineItems() {
    timelineItems.forEach((item) => {
    const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;
        if (itemPosition < screenPosition) {
            item.classList.add("show");
        }
    });
}
// Run on Scroll & Page Load
window.addEventListener("scroll", showTimelineItems);
showTimelineItems();
});
