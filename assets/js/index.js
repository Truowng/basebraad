// const menuBtn = document.querySelector("#header .menu-button");
// const closeBtn = document.querySelector(
//   "#header .header-link-list .close-button"
// );
// const menu = document.querySelector("#header .header-link-list");

// menuBtn.addEventListener("click", () => {
//   menu.classList.add("active");
// });

// closeBtn.addEventListener("click", () => {
//   menu.classList.remove("active");
// });

if (document.querySelector(".marquee-slider")) {
  const marqueeSlider = new Swiper(".marquee-slider .swiper", {
    direction: "horizontal",
    speed: 10000,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 1,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}
