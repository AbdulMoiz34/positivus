// Select all accordion items
const accordionItems = document.querySelectorAll(".my-accordion-item");

// Add click event listener to each item
accordionItems.forEach((item) => {
    const button = item.querySelector("button");
    const icon = item.querySelector(".icon");
    const accordionPara = item.querySelector(".accordion-para");

    button.addEventListener("click", () => {
        // Close all other accordion items
        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                const otherIcon = otherItem.querySelector(".icon");
                const otherPara = otherItem.querySelector(".accordion-para");

                otherItem.classList.remove("active");
                otherIcon.classList.replace("fa-minus", "fa-plus");
                otherPara.classList.add("d-none");
                otherPara.classList.remove("d-block");
            }
        });

        // Toggle the current item
        const isActive = item.classList.contains("active");

        if (isActive) {
            item.classList.remove("active");
            icon.classList.replace("fa-minus", "fa-plus");
            accordionPara.classList.add("d-none");
            accordionPara.classList.remove("d-block");
        } else {
            item.classList.add("active");
            icon.classList.replace("fa-plus", "fa-minus");
            accordionPara.classList.remove("d-none");
            accordionPara.classList.add("d-block");
        }
    });
});

// GSAP ANIMATION

// header item animation
const tl = gsap.timeline();
tl.from("nav a, header button,  .logo", {
    opacity: 0,
    y: -40,
    stagger: 0.2,
    duration: .5,
    delay: 0.5
});

tl.from(".hero-para, .hero-head, .hero-btn", {
    x: -100,
    opacity: 0,
    duration: .4,
    stagger: 0.2,
}, "-=.5");

tl.from(".hero-img", {
    x: 100,
    opacity: 0,
    duration: .5,
    stagger: 0.2,
});


// branding images animations

gsap.from(".branding-wrapper>div", {
    opacity: 0,
    duration: 1,
    y: 20,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".branding-wrapper>div",  // Element to trigger the animation
        scroller: "body",
        start: "top 80%",  // When the top of the box reaches 80% of the viewport
        end: "top 30%",    // When the top of the box reaches 30% of the viewport
        // markers: true      // Shows start and end markers (for debugging)
    }
});

// services animation 
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".services",  // Element to trigger the animation
        scroller: "body",
        start: "top 20%",  // When the top of the box reaches 80% of the viewport
        end: "top 30%",    // When the top of the box reaches 30% of the viewport
        markers: true,   // Shows start and end markers (for debugging)
        stagger: .4,
    }
});
tl2.from(".services :is(.primary-para, .primary-heading)", {
    opacity: 0,
    duration: 1,
    x: -100,
});

tl2.from(".services-row >div:first-child", {
    opacity: 0,
    duration: 1,
    x: -100,
});
tl2.from(".services-row >div:nth-child(2)", {
    opacity: 0,
    duration: 1,
    x:100
});