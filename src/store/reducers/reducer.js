import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';

const initialState = {
  items: ['Shppoing', 'Lunch', 'Sleep']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { item } = action.payload;
      const { items } = state;
      const newItems = items.push(item);

      return {
        ...state,
        items: newItems
      };
    }
    case REMOVE_ITEM: {
      const { item } = action.payload;

      if (state.items.indexOf(item) === -1) {
        console.log("Item doesn't exist.");
        return;
      }

      const { items } = state;
      const newItems = items.splice(items.indexOf(item), 1);

      return {
        ...state,
        items: newItems
      };
    }
    default:
      return state;
  }
};

export default reducer;
