document.addEventListener("DOMContentLoaded", () => {
    const demoLink = document.querySelector("a[href='#demo']");
        const demoVideo = document.getElementById("demoVideo");

        demoLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const demoSection = document.querySelector("#demo");
            demoSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
            demoVideo.currentTime = 0; // Reset video to the beginning
            demoVideo.play(); // Play the video
        });

    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // Stop observing once shown
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});