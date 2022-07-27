import React, { useEffect, useState } from 'react'

const CustomHooks= (url)=> {
    const [employees, setEmployees] = useState([]);
    
    useEffect(()=>{
        fetch(url)
            .then((res)=>res.json())
            .then((data)=> setEmployees(data));
    },[url]);

  return [employees];
}

// const CustomHooks2 = ()=>{
//     const [customer, setCustomer] = useState();

//     useEffect(()=>{
//         setCustomer("yoga");
//     },[]);
//     return {customer};
// }

export  default CustomHooks;