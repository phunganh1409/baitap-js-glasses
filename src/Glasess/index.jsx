import { useState } from "react"
import data from "./data.json"

export default function Glasses() {
    const [glasses, setGaleses] = useState(data);

    
    const [currentGlasses, setCurrentGlasses] = useState({url:"",position:{top:"0px",left:"0px"}});

    const handleGlasses = (url,position) => {
        console.log("Selected glasses:", { url, position });
    setCurrentGlasses({ url, position }); }  
        

   
    
  return (
    <div>
        <h1 className="text-center">TRY GLASSES ONLINE</h1>
        <img className="w-full parent " src="./glassesImage/background.jpg" alt="" />
        <div className="model-container" style={{position:"relative"}}>
    <img className="w-60 child" src="./glassesImage/model.jpg" alt="" />
    {currentGlasses.url && (
        <img
            src={currentGlasses.url}
            alt="glasses"
            style={{
                position: "absolute",
                top: currentGlasses.position.top,
                left: currentGlasses.position.left,
                width: "120px", 
            }}
        />
    )}
</div>

        <div className="frame child2">
           {glasses.map((item)=>{
            return(
                <div key={item.id} onClick={() => handleGlasses(item.url,item.position)}>
            {/* Hiển thị tên và giá kính, click vào sẽ thay đổi ảnh */}
            <p>{item.name}</p>
            <p>{item.price}$</p>
            <img src={item.url} alt={item.name} width="100" />
          </div>
                
            )
           })}

  
</div>



    </div>
  )
}
