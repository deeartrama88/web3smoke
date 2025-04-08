import type { Product } from "~/types/product";

export const useProducts = () => {
  const products = ref<Product[]>([]);

  return {
    products,
  };
};
