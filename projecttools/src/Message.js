import React from "react";

export function Message(props) {
    let classes = props.name === "Jarku" ? "bg-warning p-2" : "bg-success text-black text-center p-2";
    
    return (
        <h4 className={classes}>
            {props.greeting}, {props.name}!
        </h4>
    )
}