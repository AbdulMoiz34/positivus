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