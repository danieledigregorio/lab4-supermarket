import './Item.css'

const Item = ({name, purchased, id, onPurchased}) => {

    if(purchased) {
        return (
            <div className="Item01" style={{textDecorationLine: 'line-through'}}>
                {name}
            </div>
        )
    }else{
        return(
            <div className="Item01" onClick={() => onPurchased(id)}>
                {name}
            </div>
        )
    }
}


export default Item