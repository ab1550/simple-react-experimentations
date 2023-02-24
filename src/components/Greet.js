import React from "react";


function Greet (props) {
    return <div>
        <h1 id="header1">welcome to the react this is hello world</h1>
        {props.children}
    </div>
    // const newh1 = React.createElement("h1", null, "this is another h1");
    // let newtext = document.createTextNode("welcome to the react this is hello world");
    // newh1.appendChild(newtext)
    // let newh1_2 = React.createElement("h1", null, "welcome to the react")
    // return newh1

    
}
export default Greet

// import React, { useEffect, useRef } from "react";

// const MyComponent = () => {
//   const myContainer = useRef(null);
  
//   useEffect(() => {
//     console.log("myContainer..", myContainer.current);
//   });

//   return (
//     <>
//       <h1>Ref with react</h1>
//       <div ref={myContainer}>I can use the DOM with react ref</div>
//     </>
//   );
// };

// export default MyComponent;