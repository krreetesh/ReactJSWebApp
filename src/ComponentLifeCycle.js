import React from 'react';
export class ComponentLifeCycle extends React.Component {

    state = {
        msg: true,
        order: []
    }

     removeElement = (event) => {
         console.log("1",this.state.msg)
        this.setState({msg:false},()=>{
            console.log("3",this.state.msg)
        })
        console.log("2",this.state.msg)
    }

    handleLifecycle = (method) => {
        var temp = this.state.order
        temp.push(method)
        this.setState({order:temp})
    }    

    render() {
        console.log(this.state.order)
        return (
            <div>
            <div onClick={this.removeElement}>
            <h1>Click Me to remove below div</h1>
            </div>
             <p>{this.state.msg?<ThoughtClass handleLifecycle={this.handleLifecycle}/>:''}</p>
             {this.state.order.map((item)=>
                 <div>{item}</div>
             )}
            </div>
        );
    }
}

class ThoughtClass extends React.Component {
    state = {
        message: "Live and Let Live !!"
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
        this.props.handleLifecycle("componentWillMount")
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
        this.props.handleLifecycle("componentDidMount")
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT')
        this.props.handleLifecycle("componentWillUnmount")
     }

    render() {
        return (
            <div>
            <h1>Thought of the Day</h1>
            <p>{this.state.message}</p>
            </div>
        );
    }
}