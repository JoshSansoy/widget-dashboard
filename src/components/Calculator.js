import { useState } from 'react';
import Styles from './Calculator.module.css'

function Calculator(){

    const[display, setDisplay] = useState("");


    function buttonClick(n){
        setDisplay(display + n)
    }

    function calculate(){
        try{
            setDisplay(eval(display) || "")
        }catch(e){
            setDisplay("error")
        }

    }

    let numbers = [];
    for (let i = 1; i < 10; i++) {   
        numbers.push(<button onClick={() => buttonClick(i)} key={i}>{i}</button>)
        if (i === 9){
            numbers.push(<button onClick={() => buttonClick(0)} key={i+1}>0</button>)
            numbers.push(<button onClick={() => buttonClick('.')} key={i+2}>.</button>)
        }
    }

    let operators = [
        <button onClick={() => buttonClick('/')}>%</button>,
        <button onClick={() => buttonClick('*')}>X</button>,
        <button onClick={() => buttonClick('-')}>-</button>,
        <button onClick={() => buttonClick('+')}>+</button>
    ]
    
    return(
        <div className={Styles.Wrapper}>
            <div className={Styles.Calculator}>
                <input readOnly value={display}/>
                <div className={Styles.Buttons}>
                    <div className={Styles.Numbers}>
                        {numbers}
                    </div>
                    <div className={Styles.Operators}>
                        {operators}
                    </div>
                    <div className={Styles.Controls}>
                        <button onClick={()=> setDisplay("")}>AC</button>
                        <button onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator