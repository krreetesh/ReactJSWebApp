import React from 'react';
export class PropsDemo extends React.Component{
    state={
        companyName:this.props.companyName,
        companyLocation:this.props.companyLocation
    }
    changeEventCompany = (event) => {
        this.setState({
            [event.target.id]:event.target.value,
        });
    }
    render(){
        return(
            <div>
                <h1>Company Info</h1>
                <hr/>
                <p>Company Name : {this.state.companyName}</p>
                <input id="companyName" value={this.state.companyName} onChange={(event)=>this.changeEventCompany(event)}/>
                <p>Company Location : {this.state.companyLocation}</p>
                <input id="companyLocation" value={this.state.companyLocation} onChange={(event)=>this.changeEventCompany(event)}/>
            </div>
        )
    }
}