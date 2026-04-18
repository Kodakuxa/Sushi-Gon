import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import cartSlice from './cartSlice';

const reducers = combineReducers({
    counter : counterSlice,
    cart : cartSlice
})

const STORAGE_KEY = 'sushi-gon-state';

const loadState = () => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  try {
    const serializedState = window.localStorage.getItem(STORAGE_KEY);

    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
};

const store = configureStore({
  reducer: reducers,
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store