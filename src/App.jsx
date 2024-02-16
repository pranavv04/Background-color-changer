import { useState } from "react"


function App() {
const [color, setColor] = useState("olive");
let availableColor = ["green","red","yellow","orange","purple","olive" ,"black"]



  return (
  
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-xl" >
        {availableColor.map((color)=><button
        onClick={()=>setColor(color)}
        className="outline-none px-4 rounded-lg py-1 text-white shadow-lg " key={color} style={{backgroundColor :color}} 
        >{color}</button>)}       
      </div>
     </div>
    </div>
     

  )
}

export default App;
