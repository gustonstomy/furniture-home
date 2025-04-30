import { useCartDrawer } from "@/store";

export const handleAddToCart = () => {
  useCartDrawer.getState().toggleSheet(true);
};

const closeDrawer = () => {
  useCartDrawer.getState().toggleSheet(false);
};
