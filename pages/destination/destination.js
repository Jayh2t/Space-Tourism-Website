const menuItems = document.querySelectorAll(".destination-item");
const destinationImg = document.querySelector("#destinationImg");
const destinationTitle = document.querySelector("#destinationTitle");
const destinationDesc = document.querySelector("#destinationDesc");
const distance = document.querySelector("#distance");
const time = document.querySelector("#time");

const destinationContents = [
  {
    menu: "moon",
    imgSrc: "../../dist/img/destination/image-moon.png",
    imgAlt: "Moon image",
    title: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 DAYS",
  },
  {
    menu: "mars",
    imgSrc: "../../dist/img/destination/image-mars.png",
    imgAlt: "Mars image",
    title: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  {
    menu: "europa",
    imgSrc: "../../dist/img/destination/image-europa.png",
    imgAlt: "Europa image",
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
  },
  {
    menu: "titan",
    imgSrc: "../../dist/img/destination/image-titan.png",
    imgAlt: "Titan image",
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
];

menuItems.forEach((menuItem, idx) => {
  menuItem.addEventListener("click", function () {
    // remove active class
    menuItems.forEach((item) => item.classList.remove("active"));
    // add active class
    this.classList.add("active");

    // show destination content
    showDestinationContent(this.getAttribute("data-item"));
  });
});

const showDestinationContent = (content = "moon") => {
  destinationContents.forEach((desContent) => {
    if (content === desContent.menu) {
      destinationImg.setAttribute("src", desContent.imgSrc);
      destinationImg.setAttribute("alt", desContent.imgAlt);
      destinationTitle.innerHTML = desContent.title;
      destinationDesc.innerHTML = desContent.description;
      distance.innerHTML = desContent.distance;
      time.innerHTML = desContent.time;
    }
  });
};

showDestinationContent();
