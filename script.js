// ================================
// LOADING SCREEN
// ================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1200);
});


// ================================
// MUSIC BUTTON
// ================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play()
            .then(() => {
                musicPlaying = true;
                musicBtn.innerHTML = "♫ Playing";
            })
            .catch(() => {
                musicBtn.innerHTML = "♪ Our Song";
            });

    } else {

        music.pause();
        musicPlaying = false;
        musicBtn.innerHTML = "♪ Our Song";

    }

});


// ================================
// PHOTO LIGHTBOX
// ================================

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ================================
// ESCAPE KEY FOR LIGHTBOX
// ================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ================================
// SCROLL REVEAL ANIMATIONS
// ================================

const revealElements = document.querySelectorAll(
    ".story-text, .timeline-item, .gallery-item, .letter, .travel-content, .quote-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(element);

});


// ================================
// PARALLAX EFFECT
// ================================

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.style.backgroundPosition =
            `center calc(50% + ${scrollPosition * 0.15}px)`;

    }

});


// ================================
// SMALL HEART PARTICLES
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize =
        (Math.random() * 10 + 10) + "px";

    heart.style.color = "#c89b5c";
    heart.style.opacity = "0.45";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "20";

    document.body.appendChild(heart);

    const duration = Math.random() * 5000 + 5000;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },
            {
                transform: "translateY(-40vh) rotate(20deg)",
                opacity: 0.5
            },
            {
                transform: "translateY(-100vh) rotate(-20deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duration);
}


// Create a subtle heart occasionally
setInterval(createHeart, 3500);
