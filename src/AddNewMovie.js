import React from 'react';

export class AddNewMovie extends React.Component{
    
    updateInput = (event) => {
        this.setState({
            [event.target.id]:event.target.value
        })
    }

    createNewObject(event) {
        event.preventDefault();
        var temp = {};
        temp.MovieID = this.state.MovieID;
        temp.MovieName = this.state.MovieName;
        temp.LeadActor = this.state.LeadActor;
        temp.LeadActress = this.state.LeadActress;
        temp.YearOfRelease = this.state.YearOfRelease;
        temp.Language = this.state.Language;
        this.props.updateMovieList(temp);
    }

    render(){
        return(
            <div>
                <p>Enter New Movie Details</p>
                <form onSubmit={(event)=>this.createNewObject(event)}>
                    Enter Movie ID : <input type="string" id="MovieID" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Enter Movie Name : <input type="string" id="MovieName" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Enter Lead Actor : <input type="string" id="LeadActor" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Enter Lead Actress : <input type="string" id="LeadActress" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Enter Year of Release : <input type="number" id="YearOfRelease" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    Enter Language : <input type="string" id="Language" onChange={(event)=>this.updateInput(event)}/> 
                    <br/>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
