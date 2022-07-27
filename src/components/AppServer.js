//import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
//import {customHooks, customHooks2}  from "./CustomHooks";
import customHooks from "./CustomHooks";
import staticDataContext from './StaticDataContext';
const AppServer = () => {
//  const [employees, setEmployees] = useState([]);
//const {check } =useContext(staticDataContext);
//console.log('check',check);
//const {customer} = customHooks2();
//console.log(customer);

  const [employees]= customHooks("http://localhost:9090/employees");
 // const [employees] = Object.keys(employeesTest).map((key) => map[key]);
 //setEmployees(employeesTest);
  console.log(employees);

//   useEffect(() => {
//     axios
//       .get("http://localhost:9090/employees")
//       .then((response) => {
//         console.log(response.data);
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.log("Request Failed ", error);
//       });
//   }, []);

  return (
    <div>
      <table border="1">
        <tbody>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Name</th>
          {employees.map(employee => (
            <tr>
                 <td key={employee.id}>{employee.firstName}</td>
                 <td key={employee.id}>{employee.lastName}</td>
                <td key={employee.id}>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppServer;
