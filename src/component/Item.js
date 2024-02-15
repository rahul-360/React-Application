import './Item.css'
function Item(props) {
    const ItemName= props.name;
    return (
        <p className="react">{ItemName}</p>
    );

}
export default Item;