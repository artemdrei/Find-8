import { Reducer } from 'redux';
import { ITodos } from '@root/types';
import { IFetchTodos } from '@store/actions';
import { todos } from '../../defaultState';

const reducer: Reducer<ITodos, IFetchTodos> = (state = todos, { type, payload }) => {
  switch (type) {
    case 'FETCH_TODOS':
      return {
        items: payload,
      };
    default:
      return state;
  }
};

export default reducer;
