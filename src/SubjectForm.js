import React from 'react';

export class SubjectForm extends React.Component{

    findAvg = (event) => {
        event.preventDefault();
        let average = 0;
        average = (this.state.physics + this.state.chemistry + this.state.biology + this.state.maths)/4;
        console.log("average=",average)
        alert("Average="+String(average));
    }
    
    updateInput(event){
        this.setState({
            [event.target.id]:Number(event.target.value)
        })
    }

    render(){
        return(
            <div>
                <h1> Demo for Forms in ReactJS </h1>
                <hr/>
                <form onSubmit={(event)=>this.findAvg(event)}>
                    Marks in Physics : <input type="number" id="physics" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Marks in Chemistry : <input type="number" id="chemistry" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Marks in Biology : <input type="number" id="biology" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Marks in Mathematics : <input type="number" id="maths" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    <br/>
                    <button type="submit">Find Average</button>
                </form>
            </div>
        );
    }
}
