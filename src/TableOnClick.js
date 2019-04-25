import React from 'react';
export class TableOnClick extends React.Component {

i = 0;
num = 5;

state = {
    rows: []
}

addRow = (event) => {
    var temp = this.state.rows;
    this.i += 1;
    temp.push(<tr key={this.i}>
        <td>{this.i} x {this.num}</td>
        <td>{this.i * this.num}</td>
    </tr>)
    this.setState({rows:temp})
}

    render() {
        return (
            <div>
            <h1>Click to show Table 0f 5</h1>
            <button onClick={this.addRow} id="button">Click to show Table</button>
            <table border="1">
                <tbody>
                    {this.state.rows}
                </tbody>
            </table>
            </div>
        );
    }
}