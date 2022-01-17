import React, { useState, useEffect } from 'react';
import './stopwatch.css'

// Uses React only - stopwatch function, counts minutes and seconds in seperate states


export default function Stopwatch() {
    // const sw = useSelector()
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0) // Mins/Secs/Ms
    const [pause, setPause] = useState(true)

    const togglePause = () => {
        setPause(!pause);
    };
    const reset = () => {
        setSecs(0);
        setMins(0);
        setPause(true);
    };

    // Controls the time functions
    useEffect( () => {
        let interval = null;                    
        if (!pause){                                    // if pause state is false
            interval = setInterval( () => {             // Set interval for 20ms, increment using setSecs
                setSecs(x => x+0.02);
                if (secs>60){setSecs(x=>x-60);          // increases mins by 1 when secs hits 60
                    setMins(x => x + 1)};
            }, 20)
            }
        else if (pause){clearInterval(interval)};       // pause function
        
        return () => clearInterval(interval)
        }, [pause, secs]
    )



    return (
        <div>
            <div className="stopwatch-container">
                <h1 id="stopwatch-text">{mins}:{secs<10? "0" + secs.toFixed(2) : secs.toFixed(2)} </h1>
            </div>
            <div className="stopwatch-button-container">
                <button onClick={togglePause} style={{backgroundColor: "darkgreen"}}>Start/Stop</button>
                <button onClick={reset} style={{backgroundColor: 'darkred'}}>Reset</button>
            </div>
        </div>
    )
}
