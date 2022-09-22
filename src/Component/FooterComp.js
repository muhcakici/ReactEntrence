import {useState} from 'react'

function FooterComp(props) {

    const[tempName,setTempName]=useState("");

    return <div>
        <input value={tempName} onChange={(e)=>{setTempName(e.target.value)}}/>
        <button onClick={()=>{props.setName(tempName)}}>Ismi Degistir</button>
    </div>
}
export default FooterComp;