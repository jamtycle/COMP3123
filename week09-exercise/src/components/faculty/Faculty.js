import React, { Component } from "react";

export default class Faculty extends Component {

    constructor(props) {
        super(props);
        this.myFaculty = props.f;
    }

    render() {
        return (
            <>
                <h1>Faculty Component</h1>
                <h3>{this.props.f.fnm}</h3>
                <h3>{this.props.f.lnm}</h3>
                <h3>{JSON.stringify(this.props)}</h3>

                <h3>{this.myFaculty.fnm}</h3>
                <h3>{this.myFaculty.lnm}</h3>
            </>
        );
    }
}