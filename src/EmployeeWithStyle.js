import React from 'react';
export class EmployeeWithStyle extends React.Component {
    tableStyle = {
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: 'green',
        border: "2"
    }

    headerStyle = {
        backgroundColor: 'cyan'
    }
    render() {

        var objEmp = [
            { empID: 'E001', empName: 'Bhoj', empEmail: 'bhoj@wipro.com' },
            { empID: 'E002', empName: 'Jagan', empEmail: 'jagan@wipro.com' },
            { empID: 'E003', empName: 'Paneer', empEmail: 'paneer@wipro.com' },
            { empID: 'E004', empName: 'Siva', empEmail: 'siva@wipro.com' },
            { empID: 'E005', empName: 'Vijay', empEmail: 'vijay@wipro.com' }
        ];

        return (
            <div>
                <h1>Employee Information</h1>
                <hr />
                <table style={this.tableStyle}>
                    <tr>
                        <th style={this.headerStyle}>EmpID</th>
                        <th style={this.headerStyle}>Name</th>
                        <th style={this.headerStyle}>Email-ID</th>
                    </tr>
                    {objEmp.map(
                        (empDetail, iIndex) =>
                            <tr>
                                <td>{empDetail.empID}</td>
                                <td>{empDetail.empName}</td>
                                <td>{empDetail.empEmail}</td>
                            </tr>
                    )}
                </table>
            </div>
        );
    }
}