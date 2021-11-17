// technology contents
const technologyContents = [
  {
    heading: "LAUNCH VEHICLE",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imgDeskSrc: "../../dist/img/technology/image-launch-vehicle-portrait.jpg",
    imgTabSrc: "../../dist/img/technology/image-launch-vehicle-landscape.jpg",
    alt: "Launch vehicle image",
  },
  {
    heading: "SPACEPORT",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgDeskSrc: "../../dist/img/technology/image-spaceport-portrait.jpg",
    imgTabSrc: "../../dist/img/technology/image-spaceport-landscape.jpg",
    alt: "Spaceport image",
  },
  {
    heading: "SPACE CAPSULE",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgDeskSrc: "../../dist/img/technology/image-space-capsule-portrait.jpg",
    imgTabSrc: "../../dist/img/technology/image-space-capsule-landscape.jpg",
    alt: "Space capsule image",
  },
];

const slides = document.querySelectorAll(".slide");
const technologyHeading = document.querySelector(".technology-heading");
const technologyDesc = document.querySelector(".technology-desc");
const technologyImgTab = document.querySelector(".technology-image-tab");
const technologyImgDesk = document.querySelector(".technology-img img");

let activePage = 0;

const showContentPage = (page) => {
  technologyHeading.innerHTML = technologyContents[page].heading;
  technologyDesc.innerHTML = technologyContents[page].desc;
  technologyImgTab.setAttribute("src", technologyContents[page].imgTabSrc);
  technologyImgTab.setAttribute("alt", technologyContents[page].alt);
  technologyImgDesk.setAttribute("src", technologyContents[page].imgDeskSrc);
  technologyImgDesk.setAttribute("alt", technologyContents[page].alt);
};

showContentPage(activePage);

slides.forEach((slide, index) => {
  slide.addEventListener("click", function () {
    slides.forEach((slide) => slide.classList.remove("active"));
    this.classList.add("active");
    activePage = index;
    showContentPage(activePage);
  });
});
