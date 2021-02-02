let wrapper = document.getElementById("wrapper");
let hero = document.getElementById("hero");
let moveHero = 10;

window.addEventListener("load", () => {
  hero.style.position = "absolute";
  hero.style.left = 100 + "px";
  hero.style.top = 500 + "px";
});

//------------------ MOVE HERO ------------------//
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

//------------------ MOVING ENEMIES ------------------//

let counter= 0;
let right = 0
let enemies = setInterval(function (){
    counter ++;
    right += 10;
    console.log (counter);
    if (counter==3) {
      clearInterval(enemies)
      console.log("Hej", right);
      counter=0;
      let newEnemy = document.createElement("div");
      newEnemy.setAttribute("class", "enemy");
      wrapper.appendChild(newEnemy);
      newEnemy.style.position = "absolute";
      newEnemy.style.right += right + "px";
      newEnemy.style.top = Math.random()*100 + "vh";
      console.log("remove", newEnemy.style.right)
        if(newEnemy.style.left<0+"px") {
          
          //newEnemy.remove();
          
        }
  }
}, 1000);



