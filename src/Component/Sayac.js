import {useState} from 'react'
function Sayac(params) {
    const [myValue, setMyValue]=useState(0);

    function doubleValue() {
        return setMyValue(myValue*2);
    }

    return <div> {myValue}
        <button onClick={()=>{setMyValue(myValue+1);}}>Ekle</button>
        
        <button onClick={()=>{setMyValue(myValue-1);}}>Azalt</button>

        <button onClick={doubleValue}>X2</button>
    </div>
}
export default Sayac;