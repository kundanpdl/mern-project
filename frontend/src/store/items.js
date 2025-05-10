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
  fetchItems: async () => {
    const res = await fetch("api/products");
    const data = await res.json();
    set({ items: data.data });
  },
  deleteItem: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      items: state.items.filter((item) => item._id !== id),
    }));
    return { success: true, message: "Item Deleted Successfully" };
  },
  updateItem: async (id, updatedItem) => {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      items: state.items.map((item) => (item._id === id ? data.data : item)),
    }));
    return { success: true, message: "Item Updated Successfully" };
  },
}));
