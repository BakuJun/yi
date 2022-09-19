import divination from "./Divination";

const store = {
  divination
}

export default store;

export type GlobalStore = typeof store
export type GlobalKey = keyof GlobalStore
