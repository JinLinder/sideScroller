let wrapper = document.getElementById("wrapper");
let hero = document.getElementById("hero");
let moveHero = 10;

window.addEventListener("load", () => {
  hero.style.position = "absolute";
  hero.style.left = 100 + "px";
  hero.style.top = 50 + "%";
});

window.addEventListener("keydown", function (evt) {
  console.log(evt);

  switch (evt.key) {
    case "ArrowUp":
      hero.style.top = parseInt(hero.style.top) + moveHero + "px";
      break;
    case "ArrowLeft":
      hero.style.left = parseInt(hero.style.left) + moveHero + "px";
      break;
    case "ArrowDown":
      hero.style.top = parseInt(hero.style.top) - moveHero + "px";
      break;
    case "ArrowRight":
      hero.style.left = parseInt(hero.style.left) - moveHero + "px";
      break;
  }
});
