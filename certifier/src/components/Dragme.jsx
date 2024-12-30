import { useState } from 'react'
import Draggable from 'react-draggable'



const Dragg =()=>{
    const[axis,setaxis]=useState({
        x:0,
        y:0
    })



    function handledrag(e){
       
       
       setaxis({
        x:e.pageX,
        y:e.pageY
       })
       console.log(axis.x+"   "+axis.y);
       
       
    }
    return(
        
            <div draggable="true" onDrag={handledrag} className={`drag`} style={{height:"200px",width:"200px",backgroundColor:"blue",position:"absolute",left:`${axis.x}px`,top:`${axis.y}px` }}>

            </div>
        
    )
        
    
}

export default Dragg