import divination from "./Divination";
import clock from './Clock';

const store = {
  divination,
  clock
}

export default store;

export type GlobalStore = typeof store
export type GlobalKey = keyof GlobalStore
