import React from 'react'

const ProductsPage = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return (
        <div>ProductsPage ✅</div>
    )
}

export default ProductsPage