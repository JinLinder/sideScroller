let wrapper = document.getElementById("wrapper");
let hero = document.getElementById("hero");
let moveHero = 10;

window.addEventListener("load", () => {
  hero.style.position = "absolute";
  hero.style.left = 0 + "px";
  hero.style.top = 0 + "px"; 
});

//------------------ MOVE HERO ------------------//
// window.addEventListener("keydown", function (evt) {
//   console.log(evt);

//   switch (evt.key) {
//     case "ArrowUp":
//       hero.style.top = parseInt(hero.style.top) - moveHero + "px";
//       break;
//     case "ArrowLeft":
//       hero.style.left = parseInt(hero.style.left) - moveHero + "px";
//       break;
//     case "ArrowDown":
//       hero.style.top = parseInt(hero.style.top) + moveHero + "px";
//       break;
//     case "ArrowRight":
//       hero.style.left = parseInt(hero.style.left) + moveHero + "px";
//       break;
//   }
// });

// document.addEventListener("keyup", function (evt) {
//   console.log(evt.key);
//   switch (evt.key) {
//     case "ArrowUp":
//       console.log(hero.style.top)
//       if (hero.style.top = 0 + "px") {
//         hero.style.top = parseInt(hero.style.top) - 0 + "px";
//       } 
//       else { hero.style.top = parseInt(hero.style.top) - moveHero + "px";}
//       break;
      
//     case "ArrowLeft":
      
//       console.log(hero.style.left)
//       if (hero.style.left = 0 + "px") {
//         hero.style.left = parseInt(hero.style.left) - 0 + "px";
//       } else {
//         hero.style.left = parseInt(hero.style.left) - moveHero + "px";
//       }
//       break;
//     case "ArrowDown":
      
//       if (hero.style.top = 450 + "px") {
//         hero.style.top = parseInt(hero.style.top) + 0 + "px";
//       } else {
//         hero.style.top = parseInt(hero.style.top) + moveHero + "px";
//       }
//       console.log(hero.style.top)
//       break;
      
//     case "ArrowRight":
      
//       if (hero.style.left = 950 + "px") {
//         hero.style.left = parseInt(hero.style.left) +0 + "px";
//       } else {
//         hero.style.left = parseInt(hero.style.left) + moveHero + "px";
//       }
//       console.log(hero.style.left)
//       break;
//   }
// });

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
let count=0;
let right=0;
// function moveEnemies (){
// };
let enemyInterval = setInterval(createE, 500);
let enemyToLeft= setInterval (eToLeft, 10);

count ++;
if (count<100) {
  enemy(count)= createE();
  eToLeft(enemy(count));
}

function createE () {
  let enemy = document.createElement("IMG");
  enemy.setAttribute("src", "sunNew.png");
  wrapper.appendChild(enemy);
  console.log("creat new div")
  enemy.style.position = "absolute";
  enemy.style.position.right = 0+"px";
  enemy.style.width= 30+"px";
  enemy.style.height= 30+"px";
  enemy.style.zIndex = "1";
  enemy.style.top = Math.random()*500 + "px";  
}


function eToLeft (enemy) {
  right ++;
  if (right==980) {
    clearInterval(enemyToLeft);
    //enemy.remove();
  }
  else {
    enemy.style.right = right + "px";
    var heroPosition = hero.getBoundingClientRect();
    var enemyPosition = enemy.getBoundingClientRect();
    var yDistans = enemyPosition.top-heroPosition.top;
    var xDistans = enemyPosition.right - heroPosition.right
    if ( yDistans>=-10 && yDistans<=40 && xDistans<=10 && xDistans>=-40) { 
      wrapper.insertAdjacentHTML ("beforebegin", "<P id='loseText'> You are burned to ash!</P>");

      enemy.remove();
      clearInterval(enemyToLeft);
      clearInterval(enemyInterval);
      //alert ("Sorry, you are dead!");
    }
  } 
}

// moveEnemies ();