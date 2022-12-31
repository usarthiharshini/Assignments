import { useState } from "react";
import     Axios from 'axios'
function InputBox() {
    const [name,setName] = useState('')

    const submitData= async()=>{
        try {
            let res = await Axios.post(`http://localhost:8000/posts`,{
              title:name,
              author:'me'
            })
            console.log("  posted successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return ( <div>
        <input placeholder="enter name" onChange={e=>setName(e.target.value)}/>
        <button onClick={submitData}>submit</button>
    </div> );
}

export default InputBox;