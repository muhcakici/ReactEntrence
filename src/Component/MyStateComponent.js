import {useState} from 'react'
function StateComponent(params) {
    const [myValue, setMyValue]=useState('Test');
    return <div>
        {myValue} 
        <button onClick={()=>{setMyValue("Degistim.");
    }}>
            State Degistir
        </button>
    </div>
}
export default StateComponent;