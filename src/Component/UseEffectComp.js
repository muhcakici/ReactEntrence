import { useState,useEffect } from "react";

function UseEffectComp(params) {
    
    const [count, setCount]=useState(0);
    const [desc, setDesc]=useState("");

    useEffect(()=>{
            console.log("Merhaba");
    },[]);

    useEffect(()=>{
        console.log("Hello from Update");
    });

    useEffect(()=>{
        console.log("Count Degisti");
    },[count]);

    return <div> {count}
        <button onClick={()=>{setCount(count+1)}}>Arttır</button>
        <button onClick={()=>{setDesc("Random")}}>Desc Degistir</button>
    </div>
}
export default UseEffectComp;