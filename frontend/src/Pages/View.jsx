import React, { useEffect } from "react";
import ProductCard from "../Componets/ProductCard";
import useAPI from "../API/API.js";

function View() {
    const { products, fetchProducts } = useAPI();

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {/* Background Image */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: "url('/pexels-umkreisel-app-956999.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -2
                }}
            />
            {/* Translucent Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.7)",
                    zIndex: -1
                }}
            />
            <div style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "100vh",
                marginTop: "120px" // <-- Add this line to lower the products
            }}>
                {products && products.length > 0
                    ? products.map(product => (
                        <ProductCard key={product._id || product.id} product={product} />
                    ))
                    : <h1 style={{ color: "white", top: "50%", position: "absolute", transform: "translateY(-50%)" }}>No products to display</h1>
                }
            </div>
        </>
    );
}

export default View;
