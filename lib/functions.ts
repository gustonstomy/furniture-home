import { useCartDrawer } from "@/store";

export const handleAddToCart = () => {
  console.log("Added to cart");
  useCartDrawer.getState().toggleSheet(true);
};
