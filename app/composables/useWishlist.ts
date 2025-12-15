import { products } from "~~/lib";

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

// Global reactive state to ensure all components share the same wishlist instance
let globalWishlist: Ref<WishlistItem[]> | null = null;
let globalWishlistCount: ComputedRef<number> | null = null;

export const useWishlist = () => {
  // Initialize global state only once
  if (!globalWishlist) {
    globalWishlist = ref<WishlistItem[]>([]);
    globalWishlistCount = computed(() => globalWishlist!.value.length);
  }

  const wishlist = globalWishlist!;
  const wishlistCount = globalWishlistCount!;

  // Initialize wishlist from localStorage
  const initWishlist = () => {
    if (process.client) {
      const storedWishlist = localStorage.getItem("onsko-wishlist");
      if (storedWishlist) {
        wishlist.value = JSON.parse(storedWishlist);
      }
    }
  };

  // Save wishlist to localStorage
  const saveWishlist = () => {
    if (process.client) {
      localStorage.setItem("onsko-wishlist", JSON.stringify(wishlist.value));
    }
  };

  // Add item to wishlist
  const addToWishlist = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = wishlist.value.find((item) => item.id === productId);

    if (!existingItem) {
      wishlist.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
      saveWishlist();
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId: string) => {
    const index = wishlist.value.findIndex((item) => item.id === productId);
    if (index > -1) {
      wishlist.value.splice(index, 1);
      saveWishlist();
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId: string) => {
    return wishlist.value.some((item) => item.id === productId);
  };

  // Toggle wishlist status
  const toggleWishlist = (productId: string) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  // Clear wishlist
  const clearWishlist = () => {
    wishlist.value = [];
    saveWishlist();
  };

  // Initialize on client side
  if (process.client && wishlist.value.length === 0) {
    initWishlist();
  }

  return {
    wishlist: readonly(wishlist),
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
  };
};
