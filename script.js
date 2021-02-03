let wrapper = document.getElementById("wrapper");
let hero = document.getElementById("hero");
let moveHero = 10;

window.addEventListener("load", () => {
  hero.style.position = "absolute";
  hero.style.left = 0 + "px";
  hero.style.top = 0 + "px";
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
function moveEnemy () {
  let enemy = document.getElementById("enemy");
  let count = 0;
  let enemyInterval = setInterval(fram, 10);
  function fram () {
    if (count==950) {
      clearInterval(enemyInterval);
      console.log("upp till 350")
    }
    else {
      count ++;
      enemy.style.right= count +"px";
      console.log("Inte upp till 350")
    }
    
};
moveEnemy();

let newEnemyInterval = setInterval(newFram, 10);
function newFram () {
  newCount=0
  if (newCount>=10 && newCount <= 20)
  { console.log(newCount);
    let right= 0;
    let newEnemy = document.createElement("div");
    newEnemy.setAttribute("class", "newEnemy");
    wrapper.appendChild(newEnemy);
    newEnemy.style.position = "absolute";
    newEnemy.style.width= 50+"px";
    newEnemy.style.height= 50+"px";
    newEnemy.style.borderRadius = 50 + "%";
    newEnemy.style.backgroundColor = "red";
   newEnemy.style.right += right + "px";
     newEnemy.style.top = Math.random()*500 + "px";
   console.log("remove", newEnemy.style.right)
  }
}
};

// let counter= 0;
// let right = 0
// let enemies = setInterval(function (){
//     counter ++;
//     right += 10;
//     console.log (counter);
//     if (counter==3) {
//       clearInterval(enemies)
//       console.log("Hej", right);
//       counter=0;
//       let newEnemy = document.createElement("div");
//       newEnemy.setAttribute("class", "enemy");
//       wrapper.appendChild(newEnemy);
//       newEnemy.style.position = "absolute";
//       newEnemy.style.right += right + "px";
//       newEnemy.style.top = Math.random()*100 + "vh";
//       console.log("remove", newEnemy.style.right)
//         if(newEnemy.style.left<0+"px") {
          
//           newEnemy.remove();
          
//         }
//   }
// }, 1000);



