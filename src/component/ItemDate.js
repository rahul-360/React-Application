import { useState } from 'react';
import './ItemDate.css';

function ItemDate(props) {
    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle("JavaScript 2.0")
        console.log("Submit Successfully");
    }

    const day = props.day;
    const month = props.month;
    const year = props.year;

    return (
        <>
            <div className='mfg-date'>
                <div className='date'>
                    <span> {day}</span>
                    <span> {month}</span>
                    <span> {year}</span>
                    <h2>{title}</h2>
                </div>
                <button className='btn' onClick={clickHandler}> Submit </button>
            </div>

        </>
    );

}

export default ItemDate;