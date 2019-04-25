import React from 'react';
import {Header} from './Header';
class Details extends React.Component {
    render() {
        return (
            <table border="2">
                <tr>
                    <th>StudentID</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
                {this.props.studentDetails.map(
                    (stdDetail, iIndex) =>
                        <tr>
                            <td>{stdDetail.studentId}</td>
                            <td>{stdDetail.studentName}</td>
                            <td>{stdDetail.studentMarks}</td>
                        </tr>
                )}
            </table>
        );
    }
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data1: [
                { studentId: 'S001', studentName: 'Ram', studentMarks: 'ram@wipro.com' },
                { studentId: 'S001', studentName: 'Mohan', studentMarks: 'mohan@wipro.com' },
                { studentId: 'S001', studentName: 'Shyam', studentMarks: 'shyam@wipro.com' },
                { studentId: 'S001', studentName: 'Geeta', studentMarks: 'geeta@wipro.com' },
                { studentId: 'S001', studentName: 'Sohan', studentMarks: 'sohan@wipro.com' },
            ]
        }
    }
    render() {
        return (<div>
                <Header/>
            <Details studentDetails={this.state.data1}></Details>
            </div>)
    }
}


