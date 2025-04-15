import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type SheetStore = {
  currentSheetId: string | null;
  openSheet: (id: string) => void;
  closeSheet: () => void;
};

export const useSheetStore = create<SheetStore>()((set) => ({
  currentSheetId: null,
  openSheet: (id) => set({ currentSheetId: id }),
  closeSheet: () => set({ currentSheetId: null }),
}));
