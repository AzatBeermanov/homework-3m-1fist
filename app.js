
  var coins = 0;
  var energy = 100;

  const coinStep = 5;   
  const energyCost = 5; 

  function clickHandler() {
    if (energy >= energyCost) {
      coins += coinStep;
      energy -= energyCost;
    } else {
      alert("Нет энергии!");
    }

    updateUI();
  }

  function updateUI() {
    document.getElementById("coins").innerText = coins;
    document.getElementById("energy").innerText = energy;
  }
