import { create } from "zustand";

export const useAPI = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    fetchProducts: async () => {
        try {
            const response = await fetch("http://localhost:5000/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            set({ products: data.data || data.products || data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    deleteProduct: async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete product");
            }
            set((state) => ({
                products: state.products.filter((product) => product._id !== id)
            }));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    },

    createProduct: async (productData) => {
        try {
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });
            if (!response.ok) {
                throw new Error("Failed to create product");
            }
            const newProduct = await response.json();
            set((state) => ({
                products: [...state.products, newProduct.data || newProduct]
            }));
        } catch (error) {
            console.error("Error creating product:", error);
        }
    },
}));

export default useAPI;