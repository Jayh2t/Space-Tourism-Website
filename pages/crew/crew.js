// crew contents
const crewContents = [
  {
    position: "COMMANDER",
    name: "DOUGLAS HURLEY",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    imgSrc: "../../dist/img/crew/image-douglas-hurley.png",
    imgAlt: "douglas hurley image",
  },
  {
    position: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    imgSrc: "../../dist/img/crew/image-mark-shuttleworth.png",
    imgAlt: "mark shuttleworth image",
  },
  {
    position: "PILOR",
    name: "VICTOR GLOVER",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    imgSrc: "../../dist/img/crew/image-victor-glover.png",
    imgAlt: "victor glover image",
  },
  {
    position: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSERI",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    imgSrc: "../../dist/img/crew/image-anousheh-ansari.png",
    imgAlt: "anousheh anseri image",
  },
];

// variables uses
const crewPos = document.querySelector("#crewPos");
const crewName = document.querySelector("#crewName");
const crewDesc = document.querySelector("#crewDesc");
const crewImg = document.querySelector("#crewImg");

let activePage = 0;

crewContents.forEach((index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  document.querySelector(".dots").appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// show content crew pages
const showContent = (page) => {
  crewPos.innerHTML = crewContents[page].position;
  crewName.innerHTML = crewContents[page].name;
  crewDesc.innerHTML = crewContents[page].desc;
  crewImg.setAttribute("src", crewContents[page].imgSrc);
  crewImg.setAttribute("alt", crewContents[page].imgAlt);

  dots.forEach((item) => item.classList.remove("active"));
  dots[page].classList.add("active");
};

dots.forEach((dot, idx) => {
  dot.addEventListener("click", function () {
    activePage = idx;
    showContent(activePage);
  });
});

showContent(activePage);
