import React from 'react';
export class Employee extends React.Component {
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
                <table border="2">
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Email-ID</th>
                    </tr>
                    {objEmp.map(
                        (empDetail, iIndex) =>
                            <tr>
                                <td>{empDetail.empID}</td>
                                <td>{empDetail.empName}</td>
                                <td>{empDetail.empEmail}</td>
                            </tr>
                        //<Employee key={iIndex} emID={empDetail.empID} emName={empDetail.empName} emEmail={empDetail.empEmail}/>
                    )}
                </table>
            </div>
        );
    }
}