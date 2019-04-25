import React from 'react';
export class MultiplyTable extends React.Component {

    render() {
        var myVar = 5;
        var i = 1;
        var temp = [];
        for (i = 1; i <= 10; i++) {
            temp.push(<tr>
                <td>{i} x {myVar}</td>
                <td>{i * myVar}</td>
            </tr>)
        }

        return (
            <div>
            <h1>Multiplication Table 0f 5</h1>
            <table border="1">
                {temp}
            </table>
            </div>
        );
    }
}