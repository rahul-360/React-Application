import './Item.css'
function Item(props) {
    const ItemName= props.name;
    return (
        <>
        <p className="react">{ItemName}</p>
        {props.children}
        </>
    );

}
export default Item;