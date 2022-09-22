import {useState} from 'react'

function NameAsker(props) {
    const [name,setName]=useState("");

    return <div> Merhaba isminiz nedir: 
        <input value={name} onChange={(e) => {setName(e.target.value)}}/>
        Isminiz: {name}, yasınız: {props.age}
    </div>
}
export default NameAsker;