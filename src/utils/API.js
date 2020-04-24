import { AsyncStorage } from "react-native";
import Data from "./_DATA";

export const DECKS_STORAGE_KEY = "mobileFlashcards:Decks";

export function initialData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(Data));
  return Data;
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? initialData() : JSON.parse(results);
  });
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  
}

export function addQuestion({ card, deckName }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let decks = JSON.parse(result);

    let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions));
    newQuestions[newQuestions.length] = card;

    const value = JSON.stringify({
      [deckName]: { title: deckName, questions: newQuestions }
    });

    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
  });
}