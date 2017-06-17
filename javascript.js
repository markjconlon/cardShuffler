let deck = ["2c", "3c", "4c", "5c", "6c", "7c", "8c", "9c", "10c", "Jc", "Qc", "Kc", "Ac",
            "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "10d", "Jd", "Qd", "Kd", "Ad",
            "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "Jh", "Qh", "Kh", "Ah",
            "2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks", "As"]

function shuffle(array){
  var x = 0;
  var cardMove = 0;

  for (var i = 0; i < array.length; i++) {
    //find a random index of another card to be switched with the card at i
    x = Math.floor(Math.random() * (i + 1))
    //cardMove store the value of the card at the current index
    cardMove = array[i];
    //replace the current index with the value of the card at array[x]
    array[i] = array[x];
    //replace the value copied at array x into array i with the original value from array[i] (aka the current index)
    array[x] = cardMove;
  }
  return array;
}
