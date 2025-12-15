import { products } from "~~/lib";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Global reactive state to ensure all components share the same cart instance
let globalCart: Ref<CartItem[]> | null = null;
let globalCartTotal: ComputedRef<number> | null = null;
let globalCartCount: ComputedRef<number> | null = null;

export const useCart = () => {
  // Initialize global state only once
  if (!globalCart) {
    globalCart = ref<CartItem[]>([]);
    globalCartTotal = computed(() =>
      globalCart!.value.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    );
    globalCartCount = computed(() =>
      globalCart!.value.reduce((count, item) => count + item.quantity, 0)
    );
  }

  const cart = globalCart!;
  const cartTotal = globalCartTotal!;
  const cartCount = globalCartCount!;

  // Initialize cart from localStorage
  const initCart = () => {
    if (process.client) {
      const storedCart = localStorage.getItem("onsko-cart");
      if (storedCart) {
        cart.value = JSON.parse(storedCart);
      }
    }
  };

  // Save cart to localStorage
  const saveCart = () => {
    if (process.client) {
      localStorage.setItem("onsko-cart", JSON.stringify(cart.value));
    }
  };

  // Add item to cart
  const addToCart = (productId: string, quantity: number = 1) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.value.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      });
    }

    saveCart();
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const index = cart.value.findIndex((item) => item.id === productId);
    if (index > -1) {
      cart.value.splice(index, 1);
      saveCart();
    }
  };

  // Update item quantity
  const updateQuantity = (productId: string, quantity: number) => {
    const item = cart.value.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = quantity;
        saveCart();
      }
    }
  };

  // Clear cart
  const clearCart = () => {
    cart.value = [];
    saveCart();
  };

  // Initialize on client side
  if (process.client && cart.value.length === 0) {
    initCart();
  }

  return {
    cart: readonly(cart),
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };
};
