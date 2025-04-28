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
type CartDrawerProp = {
  openSheet: boolean;
  toggleSheet: (state: boolean) => void;
};

export const useCartDrawer = create<CartDrawerProp>()((set) => ({
  openSheet: false,
  toggleSheet: (state) => set({ openSheet: state }),
}));

interface AuthState {
  accessToken: string | null;
  vendorAccessToken: string | null;
  isLoggedIn: () => boolean;
  login: (accessToken: string | null) => void;
  setVendorAccessToken: (accessToken: string | null) => void;
  logout: () => void;
  isHydrated: boolean;
  setHydrated: () => void;
  getToken: () => string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      vendorAccessToken: null,
      isLoggedIn: () => !!get().accessToken,
      login: (accessToken) => {
        set({ accessToken, isHydrated: true });
      },
      setVendorAccessToken: (vendorAccessToken) => set({ vendorAccessToken }),
      logout: () =>
        set({ accessToken: null, vendorAccessToken: null, isHydrated: false }),
      isHydrated: false,
      setHydrated: () => set({ isHydrated: true }),
      getToken: () => get().accessToken,
    }),
    {
      name: "auth-tokens",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated();
        }
      },
    }
  )
);
