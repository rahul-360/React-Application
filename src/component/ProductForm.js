import React, { useState } from 'react'
import './ProductForm.css';
function ProductForm() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


    function titleChangeHandler(event) {
        setTitle(event.target.value);
        // console.log(event.target.input);
        // console.log("Title Change");
        console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        // console.log(event.target.input);
        setDate(event.target.value);
        console.log(event.target.value);

    }

    return (
        <form>
            <div className='new-product_controls'>
                <div className='new-product_title'>
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className='new-product_date'>
                    <label htmlFor="">Date</label>
                    <input type="date" onChange={dateChangeHandler} min='2024-01-01' max='2024-12-12'></input>
                </div>
                <div className='new-product_button'>
                    <button type='submit'>All Product</button>
                </div>
            </div>
        </form>
    )
}
export default ProductForm;