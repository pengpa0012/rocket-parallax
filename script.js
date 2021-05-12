const rocket = document.querySelector("svg");
window.addEventListener("scroll", (e) => {
  rocket.style.transform = `translateY(${-window.scrollY * 0.8}px)`;
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight / 2);
  console.log(window);
});
