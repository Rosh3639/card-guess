let cards = [{
    image: "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 1,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 1,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 2,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 2,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 3,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 3,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    value: 4,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    value: 4,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 5,
    status: "closed"
  },
  {
    image: "https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: 5,
    status: "closed"
  },
]


// Durnsten shuffling algorithm
let temp;

for (let i = cards.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  temp = cards[i];
  cards[i] = cards[j];
  cards[j] = temp;
}
let cardsCopy = cards;

function displayCards(data) {

  let cardsString = "";

  data.forEach(function (card, index) {
    cardsString += `
              <div class="card" style="background-image:url('${card.image}')">
                  <div class = "overlay ${card.status}" onclick="openCard(${index})">
                  </div>
              </div>

          `;
  });

  document.getElementById('cards').innerHTML = cardsString;
}
displayCards(cards);



let score = 0;
let cardCount = 1;
let val1 = null;
let val2 = null;

function openCard(index) {

  //cheat
  //console.log(cards);

  cards[index].status = "opened";
  if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
  } else if (cardCount === 2) {
    val2 = cards[index].value;

    //console.log(val1, val2);

    if (val1 === val2) {
      score++;
      document.getElementById('score').innerText = score;

      //Reset after one guess
      val1 = null;
      val2 = null;
      cardCount = 1;
    } else {
      alert('Game Over!')
      location.reload()
    }

  }
  displayCards(cards);
}