var gamer = document.getElementsByClassName("gamer")[0];
var playerHealth = 5;
var dragonHealth = 10;

while (playerHealth > 0 && dragonHealth > 0) {
  var damage = prompt(
    "Enter the number of times you attempt to hit the dragon with a max of 5"
  );
  randNum = Math.floor(Math.random() * damage) + 1;
  if (randNum > 5) {
    dragonHealth = dragonHealth - 1;
  } else {
    dragonHealth = dragonHealth - randNum;
  }
  if (dragonHealth > 0) {
    randNum2 = Math.floor(Math.random() * 2) + 1;
    playerHealth = playerHealth - randNum2;
  } else {
    gamer.innerHTML = "User Wins!";
    break;
  }
  if (playerHealth <= 0) {
    gamer.innerHTML = "Dragon Wins!";
    break;
  }
}