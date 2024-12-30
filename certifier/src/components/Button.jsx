import { useContext, useState } from "react"
import getsheetinfo from "../helpers/GetSheetinfo"
import Loader from "./loader"
import { StoreContext } from "../context/store"

const Button=()=>{

  const[view, setview]=useState(false)
  const[data,setdata]=useState("")
  const [isLoading, setIsLoading] = useState(false);

   const theme = useContext(StoreContext)
    
    const handleclick= async()=>{
        setIsLoading(true)
        const infodata= await getsheetinfo()
        if(!infodata){
             console.log("data is not fetched")
        }
       else{

        console.log("else block"+"   "+infodata);
        
        setview(true)
        setdata(infodata)
       }

       setIsLoading(false)


    }

    // const Visible=()=>{
    //     return(
    //       <div className="comp">
    //       {Array.isArray(data) && data.length > 0 ? (
    //         data.map((element, rowIndex) => (
    //           <div key={rowIndex}>
    //             {Array.isArray(element) ? (
    //               element.map((item, colIndex) => <p key={colIndex}>{item}</p>)
    //             ) : (
    //               <p>{element}</p>
    //             )}
    //           </div>
    //         ))
    //       ) : (
    //         <p>Data is not in the expected format</p>
    //       )}
    //     </div>
        
    //     )
    // }
  return(
    <div className="button text-center">
         {isLoading && <Loader />}
        <input type="button" value={theme}  className={"border-4 border-blue h-10 rounded-2 p-2"} onClick={handleclick}></input>
        {/* {view&& <Visible/>} */}
    </div>
  )
}
export default Button;