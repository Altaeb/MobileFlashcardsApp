export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addCard(cardInfo) {
  return {
    type: ADD_CARD,
    cardInfo
  };
}
