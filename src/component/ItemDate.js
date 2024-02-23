import './ItemDate.css';

function ItemDate(props) {

    function clickHandler() {
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
                </div>
                <button className='btn' onClick={clickHandler}> Submit </button>
            </div>

        </>
    );

}

export default ItemDate;