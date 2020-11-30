import React, { useState, useEffect } from 'react';
import p5 from 'p5';

function Canvas() {
  //PIVs & works like a json file so can store multiple values
  //access specific data (data.renderRef)
  //change data (setData({renderRef: ...}))
  const [data, setData] = useState({
    renderRef: new React.createRef(),
    sketch: null
  });


  
  //render function after rendering the component for the first time
  useEffect(() => {
    
    let P5 = p => {
      p.setup = () => {
        p.createCanvas(window.innerWidth,window.innerHeight)
      }
      
      p.draw = () => {
        p.background(0)
      }
    }

    setData(data.sketch = new p5(P5, data.renderRef.current))
  }, []);
  //useEffect mounts again if var inside [] changes

  return (
    <div>
      <div ref = {data.renderRef}/>
    </div>
  )
}

export default Canvas;