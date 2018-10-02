import React from "react";
import { Button } from "reactstrap"

const ActionButton = (props)=>{
    return(
        <Button className={props.status?'null':'disabled'} disabled={props.status?false:true} onClick={props.click}>{props.name}</Button>
    )
}
export default ActionButton;