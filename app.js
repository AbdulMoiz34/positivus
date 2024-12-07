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
// ------------

// GSAP ANIMATION
// header item animation
const headerAnim = () => {
    const tl = gsap.timeline();
    tl.from("nav a, header button,  .logo", {
        opacity: 0,
        y: -40,
        stagger: 0.2,
        duration: .3,
        delay: 0.5
    });

    tl.from(".hero-para, .hero-head, .hero-btn", {
        x: -100,
        opacity: 0,
        duration: .3,
        stagger: 0.2,
    }, "-=.5");

    tl.from(".hero-img", {
        x: 100,
        opacity: 0,
        duration: .3,
        stagger: 0.2,
    });
    tl.to(".hero-img", {
        duration: 1,
        scale: .9,
        repeat: -1,
        yoyo: true
    })
}

// branding images animations

const brandingImagesAnim = () => {
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
        }
    });
}

// services animation 
const servicesAnim = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",  // Element to trigger the animation
            scroller: "body",
            start: "top 50%",  // When the top of the box reaches 80% of the viewport
            end: "top -50%",    // When the top of the box reaches 30% of the viewport
            stagger: .4,
            scrub: 2,
        }
    });
    tl.from(".services :is(.primary-para, .primary-heading)", {
        opacity: 0,
        duration: 1,
        x: -100,
    });

    tl.from(".services-row >div:first-child", {
        opacity: 0,
        duration: 1,
        x: -100,
    }, "anim");
    tl.from(".services-row >div:nth-child(2)", {
        opacity: 0,
        duration: 1,
        x: 100
    }, "anim");
    tl.from(".services-row >div:nth-child(3)", {
        opacity: 0,
        duration: 1,
        x: -100,
    }, "anim2");
    tl.from(".services-row >div:nth-child(4)", {
        opacity: 0,
        duration: 1,
        x: 100
    }, "anim2");
}


// working process section animation
const workingProcessAnim = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".process",  // Element to trigger the animation
            scroller: "body",
            start: "top 50%",  // When the top of the box reaches 80% of the viewport
            end: "top -20%",    // When the top of the box reaches 30% of the viewport
            stagger: .4,
            scrub: 2,
        }
    });
    tl.from(".process .primary-heading", {
        opacity: 0,
        duration: .5,
        y: -40,
    });


    tl.from(".process p.primary-para", {
        opacity: 0,
        duration: .4,
        y: 40,
    })

    // accordian animations
    tl.from(".my-accordion-item.left", {
        opacity: 0,
        duration: .4,
        x: -100,
        stagger: .5
    }, "anim1")
    tl.from(".my-accordion-item.right", {
        opacity: 0,
        duration: .4,
        x: 100,
        stagger: .4
    }, "anim1")
}

// contact form animation 

const contactFormAnim = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-us",
            scroller: "body",
            start: "top 50%",
            end: "top -20%",
            scrub: true
        }
    });
    tl.from(".form-container", {
        opacity: 0,
        duration: .4,
        y: -200
    });
}
const serviceLinksArrowAnim = () => {
    gsap.to(".service-links-arrow-icon", {
        x: 200,
        duration: 1,
        yoyo: true,
        repeat: -1,
    });
}
headerAnim();
brandingImagesAnim();
servicesAnim();
workingProcessAnim();
contactFormAnim();
serviceLinksArrowAnim();



const navOpenBtn = document.querySelector(".nav-expanded-icon");
const navCloseBtn = document.querySelector(".nav-closed-icon");
const navBar = document.querySelector("nav");
navOpenBtn.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(navBar, {
        right: "0%",
        duration: .6,
        ease: "power1.out",
    });
    tl.from("#nav a", {
        opacity: 0,
        x: 40,
        y: -10,
        stagger: 0.4,
        duration: .4,
    });
    tl.from(navCloseBtn, {
        opacity: 0
    }, "-=.4");
});

navCloseBtn.addEventListener("click", () => {
    const tl = gsap.timeline();
    tl.to(navBar, {
        right: "-100%",
        duration: .4,
    });
});
