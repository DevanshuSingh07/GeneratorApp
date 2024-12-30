import { useState } from "react"
import {datainterpreter} from'./certificates/content'
import Temp from "./certificates/template";
const Forms =()=>{
    const [text,settext]=useState("") 
    const[render,setrender]=useState(false)
    const[data,setdata]=useState({
        fullname:"",
        age:"",
        gender:"",
        organization:""

    });
    
    const datahandle =(e)=>{

        const{name,value}=e.target
        setdata({
            ...data,
            [name]:value,
        })
    }

   async  function handlesubmit(){
        console.log(data);
        setrender(true)
       const text= await datainterpreter(data)
       settext(text)
        
    }
    return(
        <div className="form">
            <form>
                <input type="text" name="fullname" onChange={datahandle} />
                <input type="text" name="age" onChange={datahandle}  />
                <input type="text" name="gender" onChange={datahandle}  />
                <input type="text" name="organization" onChange={datahandle}  />
                <input type="button" value="click" onClick={handlesubmit} />
            </form>
       {render &&
        <Temp text={text}/>
       }

        </div>
    )
}

export default Forms;