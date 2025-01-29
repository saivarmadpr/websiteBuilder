import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animate the hero section
gsap.from(".hero h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
});

// Animate service cards
gsap.from(".service-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
    },
});