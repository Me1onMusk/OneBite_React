import { useState } from "react";

const Bulb = () => {
    const [light, setLight] = useState("OFF");

    return (
        <div>
            <div>
                {light === "ON" ? <h3 style={{backgroundColor: "orange"}}>ON</h3> : <h3 style={{backgroundColor: "gray"}}>OFF</h3>}
            </div>
            <div>
                <h3>{light}</h3>
                <button onClick={ () => {setLight(light === "ON" ? "OFF" : "ON")} }>{light==="ON" ? "끄기" : "켜기"}</button>
            </div> 
        </div>
    );
};

export default Bulb;