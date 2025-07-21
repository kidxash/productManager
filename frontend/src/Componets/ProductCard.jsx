import React from "react";
import useAPI from "../API/API";


function ProductCard({ product }) {
       const { deleteProduct } = useAPI();

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduct(product._id || product.id);
        }
    };
    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                padding: "24px",
                margin: "16px",
                maxWidth: "400px",
                fontFamily: "Montserrat, sans-serif"
            }}
        >
            <h2 style={{ marginBottom: "12px", color: "#222" }}>Title: {product.Title}</h2>
          
            <pre style={{
                background: "#f5f5f5",
                padding: "12px",
                borderRadius: "8px",
                color: "#333",
                overflowX: "auto"
            }}>
                {product.productData}
            </pre>
            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    marginTop: "12px"
                }}
            >
                Delete
            </button>
        </div>
    );
}

export default ProductCard;

