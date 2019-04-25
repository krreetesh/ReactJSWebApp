import React from 'react';
export class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heading: "Student Details",
        }
    }
    render() {
        return (<div><h1>{this.state.heading}</h1></div>)
    }
}