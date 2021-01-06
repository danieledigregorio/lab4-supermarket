import './App.css';
import {InputPane} from "./InputPane";
import {useState} from "react";
import Items from "./Items";

function App() {

    const [items, setItems] = useState([])
    const onAdd = (text) => {setItems([...items, {id:items.length+1, name:text, purchased:false}])}
    const onPurchased= (id) => setItems( items.map(item => item.id==id ? {...item, purchased: true}:item))

  return (
    <div className="App">
        <InputPane onAdd={onAdd}/>

        <Items items={items} onPurchased={onPurchased}/>
    </div>
  );
}

export default App;
