import { create } from "zustand";
import { CommitTransform } from "../types/commitResponse";

type Item = {
  name: string;
  description: string;
  language: string;
  forks: number;
};

type InitState = {
  item: Item;
  data: CommitTransform[];
};
const initalState: InitState = {
  item: {
    name: "",
    description: "",
    language: "",
    forks: 0,
  },
  data: [],
};

type Action = {
  setItem: (item: Item) => void;
  setData: (data: CommitTransform[]) => void;
};

export const useSelectItem = create<InitState & Action>((set) => ({
  ...initalState,
  setItem: (item) => set({ item }),
  setData: (data) => set({ data }),
}));
