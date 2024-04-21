import React, { useState, useEffect } from 'react';
import './index.css'
function ProductsSection() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    // Function to fetch products from the API
    const fetchProducts = () => {
        fetch('https://apis.ccbp.in/products')
            .then(response => response.json())
            .then(data => {
                // Extract image URLs from each product
                const productImages = data.products.map(product => product.image_url);
                setProducts(productImages);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    return (
        <div className='images'>
            <h2>Products Section</h2>
            <div className="product-images">
                {products.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Product ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default ProductsSection;
