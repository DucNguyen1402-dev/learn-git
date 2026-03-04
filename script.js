document
  .querySelector('[ data-btn="switch-mode"]')
  .addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const imgIcon = document.querySelector('[data-img="icon"]');
    if (html.classList.contains("dark")) {
      imgIcon.src = "./img/day-mode.png";
      imgIcon.alt="Light mode icon";
    } else {
      imgIcon.src = "./img/night-mode.png";
    }
  });
