import { create } from "zustand";

type Item = {
  name: string;
  description: string;
  language: string;
  forks: number;
};

type InitState = {
  item: Item;
};
const initalState: InitState = {
  item: {
    name: "",
    description: "",
    language: "",
    forks: 0,
  },
};

type Action = {
  setItem: (item: Item) => void;
};

export const useSelectItem = create<InitState & Action>((set) => ({
  ...initalState,
  setItem: (item) => set({ item }),
}));
