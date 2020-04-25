import { fetchDecks } from "../utils/API";
import { getDecks } from "./decks";

export default function handleInitialData() {
  return dispatch => {
    return fetchDecks().then(decks => {
      dispatch(getDecks(decks));
    });
  };
}
