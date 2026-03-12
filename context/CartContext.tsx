"use client";

import { createContext, useContext, useEffect, useReducer, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: string;
  image?: string;
  size: string;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string; size: string }
  | { type: "CLEAR_CART" }
  | { type: "LOAD"; items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.some(
        (i) => i.id === action.item.id && i.size === action.item.size
      );
      if (exists) return state;
      return { items: [...state.items, action.item] };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (i) => !(i.id === action.id && i.size === action.size)
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    case "LOAD":
      return { items: action.items };
    default:
      return state;
  }
}

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) {
        dispatch({ type: "LOAD", items: JSON.parse(saved) });
      }
    } catch {}
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem: (item) => dispatch({ type: "ADD_ITEM", item }),
        removeItem: (id, size) => dispatch({ type: "REMOVE_ITEM", id, size }),
        clearCart: () => dispatch({ type: "CLEAR_CART" }),
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
