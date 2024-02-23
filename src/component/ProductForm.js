import React from 'react'
import './ProductForm.css';
function ProductForm() {
    return (
        <form>
            <div className='new-product_title'>
                <label htmlFor="">Title</label>
                <input type="text"></input>
            </div>
            <div className='new-product_date'>
                <label htmlFor="">Date</label>
                <input type="date" min='2024-01-01' max='2024-12-12'></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>All Product</button>
            </div>
        </form>
    )
}
export default ProductForm;