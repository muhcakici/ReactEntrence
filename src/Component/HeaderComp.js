import {useState} from 'react'

function HeaderComp(props) {
    const [name,setName]=useState("");

    return <div> Merhaba {props.name}
    </div>
}
export default HeaderComp;