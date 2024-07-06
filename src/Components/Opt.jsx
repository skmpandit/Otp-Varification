import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"


// eslint-disable-next-line react/prop-types
const Opt = ({ optLength = 6}) => {
    const [otpField, setOptField] = useState(new Array(optLength).fill(""));
    const ref = useRef([]);
    const handleKeyDown = (e,index) => {
        const key = e.key;
        console.log(key);
        if(key === "ArrowLeft") {
            if(index > 0) {
                ref.current[index-1].focus();
            }
            return;
        }
        if(key === "ArrowRight") {
            if(index + 1 < otpField.length) {
                ref.current[index+1].focus();
            }
            return;
        }
        const copyOptField = [...otpField];
        if(key === "Backspace") {
            copyOptField[index] = "";
            if(index > 0) {
                ref.current[index-1].focus();
            }
            setOptField(copyOptField);
        }
        if(isNaN(key)) {
            return;
        }
        copyOptField[index] = key;
        if(index + 1 < otpField.length) {
            ref.current[index+1].focus();
        }
        setOptField(copyOptField);
    }
    useEffect(() => {
        ref.current["0"].focus();
    },[])
  return (
    <div className="Container">
        {otpField.map((value,index) => {
            return <input className="inpuField" key={index} type="text" value={value} ref={(currentInputs) => (ref.current[index]) = currentInputs} onKeyDown={(e) => handleKeyDown(e,index)} />
        })}
    </div>
  )
}

export default Opt