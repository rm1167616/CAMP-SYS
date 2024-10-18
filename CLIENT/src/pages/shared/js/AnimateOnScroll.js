// AnimateOnScroll.js
const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
  let elements = []; // Initialize the elements array

  const windowTop = offset * window.innerHeight / 100;
  const windowBottom = window.innerHeight - windowTop;
  const windowLeft = 0;
  const windowRight = window.innerWidth;

  this.start = (element) => {
    window.requestAnimationFrame(() => {
      element.style.animationDelay = element.dataset.animationDelay || '0s'; // Read delay from attribute
      element.style.animationDuration = element.dataset.animationDuration || '1s'; // Read duration from attribute
      
      // console.log(`Animating: ${element.dataset.animation} with delay: ${element.dataset.animationDelay}`); // Log animation and delay
      
      element.classList.add(element.dataset.animation);
      element.style.opacity = 1; // Ensure the element becomes visible
      element.dataset.animated = "true"; // Mark the element as animated
    });
  };

  this.inViewport = (element) => {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + parseInt(element.dataset.animationOffset) || elementRect.top;
    const elementBottom = elementRect.bottom - parseInt(element.dataset.animationOffset) || elementRect.bottom;

    return elementTop <= windowBottom && elementBottom >= windowTop;
  };

  this.verifyElementsInViewport = (els = elements) => {
    for (let i = 0, len = els.length; i < len; i++) {
      if (els[i].dataset.animated) continue; // Skip already animated elements
      if (this.inViewport(els[i])) {
        this.start(els[i]);
      }
    }
  };

  this.getElements = () => document.querySelectorAll("[data-animation]:not([data-animated])");

  this.update = () => {
    elements = this.getElements();
    elements && this.verifyElementsInViewport(elements);
  };

  // Event listeners for load, scroll, and resize
  window.addEventListener("load", this.update, false);
  window.addEventListener("scroll", () => this.verifyElementsInViewport(elements), { passive: true });
  window.addEventListener("resize", () => this.verifyElementsInViewport(elements), { passive: true });
};


export default AnimateOnScroll;
