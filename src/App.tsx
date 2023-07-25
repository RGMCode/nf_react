import './App.css'
import {useState} from "react";

type HelloProps = {
    name: string;
    age: number;
}

function Hello(props: HelloProps) {
    return <h1>Hello {props.name} i heared you are {props.age} years old!</h1>
}

function Counter() {
    const state = useState(0);
    return (
        <div>
            <div>Counter</div>
            <button onClick={() => state[1](state[0] + 1)}>UP</button>
            <p>{state}</p>
        </div>
    );
}

function GetName() {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button>OK</button>
            <p>{name}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hello darkness my old friend 🧡</h1>
            <Hello name={"Marvin"} age={26}></Hello>
            <Counter></Counter>
            <GetName></GetName>
        </div>

    )
}

export default App
