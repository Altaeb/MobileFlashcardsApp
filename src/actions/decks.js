export default GET_DECKS = "GET_DECKS";
export default ADD_DECK = "ADD_DECK";
export default ADD_CARD = "ADD_CARD";

export default function addDeck(deck) {
  return {
    type: addDeck,
    deck
  };
}

export default function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export default function addCard(cardInfo) {
  return {
    type: ADD_CARD,
    cardInfo
  };
}