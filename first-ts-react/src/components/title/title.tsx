import React from "react";

interface TitleProps {
    Name : string,
    Age : number
}

export const Title : React.FC<TitleProps>  = (props) => {
    return (
    <>
        <h1>Hello {props.Name} {props.Age}cm</h1>
    </>);
}