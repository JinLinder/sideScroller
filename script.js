let wrapper = document.getElementById("wrapper");
let hero = document.getElementById("hero");
let moveHero = 10;

window.addEventListener("load", () => {
  hero.style.position = "absolute";
  hero.style.left = 100 + "px";
  hero.style.top = 100 + "px";
});

//------------------ MOVE HERO ------------------//
window.addEventListener("keydown", function (evt) {
  console.log(evt);

  switch (evt.key) {
    case "ArrowUp":
      hero.style.top = parseInt(hero.style.top) - moveHero + "px";
      break;
    case "ArrowLeft":
      hero.style.left = parseInt(hero.style.left) - moveHero + "px";
      break;
    case "ArrowDown":
      hero.style.top = parseInt(hero.style.top) + moveHero + "px";
      break;
    case "ArrowRight":
      hero.style.left = parseInt(hero.style.left) + moveHero + "px";
      break;
  }
});

//------------------ CREAT NEW ENEMIES AND MOVE THEM ------------------//

function moveEnemies (){
  let newCount=0;
  let newEnemyInterval = setInterval(newFrame, 500);
  function newFrame () {
    newCount ++;
    if (newCount==950) { 
      clearInterval(newEnemyInterval);
      console.log("clear newCount");
    }
    else if (newCount<100) {
      let newEnemy = document.createElement("div");
      wrapper.appendChild(newEnemy);
      console.log("creat new div")
      newEnemy.style.position = "absolute";
      newEnemy.style.position.right = 0+"px";
      newEnemy.style.width= 20+"px";
      newEnemy.style.height= 20+"px";
      newEnemy.style.borderRadius = 50 + "%";
      newEnemy.style.backgroundColor = "red";
      newEnemy.style.top = Math.random()*500 + "px";
    
      let right=0;
      let enemyToLeft= setInterval (newNFrame, 10);
      function newNFrame () {
        right ++;
        if (right==950) {
          clearInterval(enemyToLeft);
        }
        else {
          newEnemy.style.right = right + "px";
          var heroPosition = hero.getBoundingClientRect();
          //console.log(heroPosition.top, heroPosition.right, heroPosition.bottom, heroPosition.left);
          var newEnemyPosition = newEnemy.getBoundingClientRect();
          //console.log(newEnemyPosition.top, newEnemyPosition.right, newEnemyPosition.bottom, newEnemyPosition.left);
          if (heroPosition.right==newEnemyPosition.right-20 ) { 
            console.log (heroPosition.right)
            console.log (newEnemyPosition.right)
            alert ("Sorry, you are dead!")
          }
        } 
      }
    }
  }
};
moveEnemies ();


