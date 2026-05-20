const layers = {
    stars: document.querySelector(".stars"),
    sky: document.querySelector(".sky"),
    fog: document.querySelector(".fog"),
    cityBack: document.querySelector(".city-back"),
    city: document.querySelector(".city"),
    foreground: document.querySelector(".foreground"),
    title: document.querySelector(".title"),
    neon: document.querySelectorAll(".neon")
};

/* SCROLL PARALLAX */

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    layers.stars.style.transform =
        `translateY(${scrollY * 0.05}px)`;

    layers.sky.style.transform =
        `translateY(${scrollY * 0.1}px)`;

    layers.fog.style.transform =
        `translateY(${scrollY * 0.2}px)`;

    layers.cityBack.style.transform =
        `translateY(${scrollY * 0.25}px)`;

    layers.city.style.transform =
        `translateY(${scrollY * 0.4}px)`;

    layers.foreground.style.transform =
        `translateY(${scrollY * 0.65}px)`;

    layers.title.style.transform =
        `translate(-50%, calc(-50% + ${scrollY * 0.2}px))`;

});

/* FLOATING NEONS */

layers.neon.forEach((neon, index) => {

    let speed = (index + 1) * 0.3;

    window.addEventListener("scroll", () => {

        const scrollY = window.pageYOffset;

        neon.style.transform =
            `translateY(${scrollY * speed}px)`;

    });

});
