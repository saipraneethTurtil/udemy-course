import React, { useState } from "react";

const ShowXY = () => {
    //const [showXY, setShowXY] = useState("01,0");
    const [Obj, Setobj] = useState({
        showXY: '0,0',
       // bool:true,

    });

  return (
    <div>
          <h1>{Obj.showXY}</h1>
          
    </div>
  );
};

export default ShowXY;
