import create from "zustand";
import { IResumeItem } from "../components/resume/IResumeItem";

export interface ResumeItemsStore {
  selectedItems: IResumeItem[];
  setSelectedItems: (items: IResumeItem[]) => void;
}

const useResumeItemsStore = create<ResumeItemsStore>((set) => ({
  selectedItems: [],
  setSelectedItems: (items: IResumeItem[]) =>
    set((state) => ({ ...state, selectedItems: items })),
}));
