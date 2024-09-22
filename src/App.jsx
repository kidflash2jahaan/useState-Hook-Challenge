import './App.css'
import {useState} from "react";

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    function updateTime() {
        setTime(new Date().toLocaleTimeString())
    }
    
    return (<div>
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
    </div>)
}

export default App
