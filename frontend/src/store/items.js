import { create } from "zustand";

export const useItemsStore = create((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  createItem: async (newItem) => {
    if (!newItem.name || !newItem.price || !newItem.image) {
      return { success: false, message: "Please fill in all the fields" };
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const data = await res.json();
    set((state) => ({ items: [...state.items, data.data] }));
    return {
      success: true,
      message: "Item Created Successfully",
    };
  },
}));
