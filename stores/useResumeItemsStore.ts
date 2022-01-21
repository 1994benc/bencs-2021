import _ from "lodash";
import create from "zustand";
import { IResumeItem } from "../components/resume/IResumeItem";

export interface ResumeItemsStore {
  selectedItems: IResumeItem[];
  setSelectedItems: (items: IResumeItem[]) => void;
  addSelectedItem: (item: IResumeItem) => void;
}

export const useResumeItemsStore = create<ResumeItemsStore>((set) => ({
  selectedItems: [],
  setSelectedItems: (items: IResumeItem[]) =>
    set((state) => ({ ...state, selectedItems: items })),
  addSelectedItem: (item: IResumeItem) =>
    set((state) => ({
      ...state,
      selectedItems: _.uniqBy([...state.selectedItems, item], "id"),
    })),
}));
