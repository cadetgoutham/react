import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Slice/ReduxSlicer';

const STORAGE_KEY = 'resume-app-state';

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
};

const Store = configureStore({
  reducer: {
    Details: Reducer
  },
  preloadedState: loadState()
});

Store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Store.getState()));
  } catch {
    // storage unavailable (private mode / quota); ignore
  }
});

export default Store;
