import { useEffect, useRef } from "react";

 
 function Hooks(){

    const countValue = useRef(0);
    const divElementRef = useRef();
    const inputRefElement = useRef();

    function handleClick() {
        countValue.current++;
        console.log(countValue.current);
        
    }
    useEffect(()=>{
        const getDivRefrence = divElementRef.current;
        console.log(getDivRefrence);
        inputRefElement.current.focus();

        getDivRefrence.style.color = "red";
        setTimeout(() => {
            getDivRefrence.style.color = "green";
            setTimeout(() => {
                getDivRefrence.style.color = "blue";
            }, 1000);
        }, 2000);
        
    },[]);
    return(
        <div>
            <h1>Use ref, use callback and use memo hooks</h1>
            <button onClick={handleClick}>Click Me</button>
            <div ref={divElementRef}>Some random text</div>
            <input name="name" placeholder="Enter your name" ref={inputRefElement}/>
        </div>
    );
 }

 export default Hooks;