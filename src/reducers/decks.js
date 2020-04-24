import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions/decks";

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return { ...state, ...action.decks };

    case ADD_DECK:
      return { ...state, ...action.deck };

    case ADD_CARD:
      const { title, question, answer } = action.params;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: JSON.parse(JSON.stringify(state[title].questions)).concat([
            { question, answer }
          ])
        }
      };

    default:
      return state;
  }
}

export default decks;