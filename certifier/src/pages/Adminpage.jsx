import { StoreContext } from "../context/store";
import { useState } from "react";
import Button from "../components/Button";
import { useLoaderData } from "react-router-dom";

const Adminpage=()=>{
    const [provide, setprovide]=useState("theme")
    const data = useLoaderData();
  console.log(data);
    return(
        <StoreContext.Provider value={provide}>
        <div className="box">
             
        <Button/>
        
        </div>
        </StoreContext.Provider>
    )
}

export default Adminpage;