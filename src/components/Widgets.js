import { useState } from "react"
import Styles from './Widgets.module.css'
function Widgets(props){

    
    return(
        <div className={Styles.Widgets}>
            {props.activeWidgets}
        </div>
    )
}

export default Widgets