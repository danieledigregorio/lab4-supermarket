import './InputPane.css'
import {useState} from "react";

export function InputPane({onAdd}) {

    const [text, setText] = useState("")

    return (
        <div className="Input">
            <input type="text" placeholder="Scrivi qui" onChange={e => setText(e.target.value)} value={text} />
            <button onClick={() => {onAdd(text); setText("")}}>Add</button>
        </div>
    )
}

export default InputPane