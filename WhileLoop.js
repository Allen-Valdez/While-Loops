//These are the cards I will be iterating through.
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
//Using a while loop, it will keep iterating through the cards variable until it pulls out 'spade'
while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}