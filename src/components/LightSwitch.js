import { useState } from 'react';

function LightSwitch(){
    const [lightSwitch, setLightSwitch] = useState(false);

   /* if(lightSwitch){
        return(
            <div>
                <p>The light switch is on</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>The light switch is off</p>
            </div>
        )
    } this is the same as the if statment code below*/ 

    function handleTurnOn(e){
        e.preventDefault()
        setLightSwitch(true)
    }

    function handleTurnOff(e){
        e.preventDefault()
        setLightSwitch(false)
    }

    return(
        //if light switch is true say first sentence else say second sentance
        <div>
            <p>{lightSwitch ? "The light switch is on" : "The light switch is off"}</p> 
            <button onClick={handleTurnOn} disabled={lightSwitch}> Turn on light switch</button>
            <button onClick={handleTurnOff} disabled={!lightSwitch}> Turn off light switch</button>
        </div>
    )
}
export default LightSwitch;