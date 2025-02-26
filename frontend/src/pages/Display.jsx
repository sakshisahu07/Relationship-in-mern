
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Display=()=>{
    const[mydata,seMydata]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8080/employee/display";
        axios.get(api).then((res)=>{
            seMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData()
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.secondname}</td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
            </tr>
            </>
        )
    })
    return(
       <>
       
       <table>
        <tr>
            <th>FirstName</th>
            <th>Second Name</th>
            <th>USer id</th>
            <th>Email</th>
        </tr>
        {ans}
       </table>
       </>
      
    )
}
export default Display;