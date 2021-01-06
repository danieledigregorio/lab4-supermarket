import './Items.css'
import Item from "./Item";

function Items({items, onPurchased}) {
    return (
        <div>
            {
                items.map(i => <Item name={i.name} purchased={i.purchased} id={i.id} onPurchased={onPurchased} />)
            }
        </div>
    )
}

export default Items