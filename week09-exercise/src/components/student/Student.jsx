import React from "react";
import "./Student.css";

const s = {
    color: "red",
    backgroundColor: "yellow",
};

export default function Student(props) {
    return (
        <React.Fragment>
            <h1>Student Component</h1>
            <h2 style={s}>First Name: {props.fnm}</h2>
            <h2 className="c1">Last Name: {props.lnm}</h2>
        </React.Fragment>
    );
}

Student.defaultProps = {
    fnm: "Default First Name",
    lnm: "Default Last Name",
}