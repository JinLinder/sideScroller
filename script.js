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
  let enemyInterval = setInterval(frame, 10);
  function frame () {
    if (count==950) {
      clearInterval(enemyInterval);
      console.log("upp till 350")
    }
    else {
      count ++;
      enemy.style.right= count +"px";
      console.log("Inte upp till 350")
    }
  }  
};
moveEnemy();

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
    else if (newCount<12) {
      let newEnemy = document.createElement("div");
      wrapper.appendChild(newEnemy);
      console.log("creat new div")
      newEnemy.style.position = "absolute";
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
        } 
      }
    }
  }
};
moveEnemies ();


